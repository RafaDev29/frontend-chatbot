<template>
    <div class="fixed bottom-6 right-6 z-50">
      <!-- Botón para abrir el chat -->
      <button
        @click="toggleChat"
        class="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <i class="mdi mdi-message-text-outline text-2xl"></i>
      </button>
  
      <!-- Ventana del chat -->
      <div
        v-if="isChatOpen"
        class="w-80 h-96 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      >
        <!-- Header del chat -->
        <div class="bg-blue-600 p-4 flex justify-between items-center">
          <h3 class="font-bold text-lg">Asistente Virtual</h3>
          <button @click="toggleChat" class="text-white hover:text-gray-300">
            <i class="mdi mdi-close text-xl"></i>
          </button>
        </div>
  
        <!-- Contenido del chat -->
        <div class="flex-1 p-4 overflow-y-auto space-y-4">
          <!-- Mensajes -->
          <div v-for="(msg, index) in messages" :key="index" class="flex flex-col">
            <!-- Mensaje del usuario -->
            <div
              v-if="msg.sender === 'user'"
              class="bg-blue-600 text-white p-3 rounded-lg self-end max-w-xs mb-2"
            >
              {{ msg.text }}
            </div>
            <!-- Mensaje del bot -->
            <div
              v-else
              class="bg-gray-700 text-white p-3 rounded-lg self-start max-w-xs mb-2"
            >
              <p>{{ msg.text }}</p>
              <p v-if="msg.timestamp" class="text-xs text-gray-400 mt-2">
                {{ formatTimestamp(msg.timestamp) }}
              </p>
            </div>
          </div>
          <!-- Estado escribiendo -->
          <div v-if="isTyping" class="bg-gray-700 text-white p-3 rounded-lg self-start max-w-xs">
            Escribiendo...
          </div>
        </div>
  
        <!-- Input para escribir mensajes -->
        <div class="p-3 border-t border-gray-700 bg-gray-900 flex items-center">
          <input
            type="text"
            v-model="userInput"
            placeholder="Escribe tu mensaje..."
            class="flex-1 p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            @keydown.enter="sendMessage"
          />
          <button
            @click="sendMessage"
            class="ml-2 bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700"
          >
            <i class="mdi mdi-send"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, reactive, onMounted } from "vue";
  import { chatbotApi } from "@/api/chatbotService.js";
  
  export default {
    name: "ChatBot",
    setup() {
      const isChatOpen = ref(false); // Controla si el chat está abierto o cerrado
      const userInput = ref(""); // Mensaje del usuario
      const isTyping = ref(false); // Estado escribiendo
      const messages = reactive([
        {
          sender: "bot",
          text: "Hola, por medio de este chat me puedes preguntar lo que desees con respecto a la seguridad.",
        },
      ]);
  
      const toggleChat = () => {
        isChatOpen.value = !isChatOpen.value;
      };
  
      const sendMessage = async () => {
        if (userInput.value.trim() === "") return; // Evitar mensajes vacíos
  
        // Agregar mensaje del usuario
        messages.push({ sender: "user", text: userInput.value });
        const userMessage = userInput.value; // Capturar el texto antes de limpiar
        userInput.value = ""; // Limpiar input
  
        // Mostrar "escribiendo..."
        isTyping.value = true;
  
        try {
          // Llamar al API
          const response = await chatbotApi({ userInput: userMessage });
  
          if (response.data.status) {
            // Manejar cuando se encuentra una coincidencia
            if (response.data.data.question) {
              const { question, answer, processedAt } = response.data.data;
  
              // Agregar respuesta del bot
              messages.push({
                sender: "bot",
                text: `Pregunta relacionada: "${question}"\n\n${answer}`,
                timestamp: processedAt,
              });
            } else {
              // Manejar cuando no se encuentra una coincidencia
              const { content, extraInfo } = response.data.data[0];
              messages.push({
                sender: "bot",
                text: `${content}\n\n${extraInfo}`,
              });
            }
          } else {
            // Manejar caso de error genérico en el API
            messages.push({
              sender: "bot",
              text: "Lo siento, no pude procesar tu consulta. Intenta de nuevo.",
            });
          }
        } catch (error) {
          console.error("Error al llamar al API:", error);
          messages.push({
            sender: "bot",
            text: "Ha ocurrido un error al procesar tu consulta. Por favor, intenta más tarde.",
          });
        } finally {
          isTyping.value = false; // Ocultar "escribiendo..."
        }
      };
  
      const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      };
  
      onMounted(() => {
        // Mostrar mensaje inicial cuando se monta el componente
        if (messages.length === 1) {
          messages.push({
            sender: "bot",
            text: "¿En qué puedo ayudarte hoy?",
          });
        }
      });
  
      return {
        isChatOpen,
        toggleChat,
        userInput,
        messages,
        isTyping,
        sendMessage,
        formatTimestamp,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Ajustar el scroll dentro del chat */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
  </style>
  