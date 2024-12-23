<script setup>
import DefaultLayoutView from "./layout/DefaultLayoutView.vue";
import { ref } from "vue";
import emailjs from '@emailjs/browser';

const fullname = ref("");
const email = ref("");
const message = ref("");
const isLoading = ref(false);

const sendEmail = async () => {
  try {
    isLoading.value = true;

    const templateParams = {
      to_email: "fabdurrahman904@gmail.com",
      from_name: fullname.value,
      from_email: email.value,
      message: message.value,
    };

    await emailjs.send(
      "service_7vp42sk0423",
      "template_c94hs4j",
      templateParams,
      "5DAG-pyCI9LMEAWYT"
    );

    fullname.value = "";
    email.value = "";
    message.value = "";

    alert("Email sent successfully");
  } catch (err) {
    console.error("error sending email", err);
    alert("Failed to send message. Please try again.");
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <DefaultLayoutView>
    <section id="contact" class="pt-24 md:pt-28 px-4 md:px-16">
      <div class="h-screen">
        <div class="relative">
          <h1
            class="font-LibreBaskerville text-5xl md:text-9xl text-light text-center"
          >
            Drop me a message
          </h1>
          <div
            class="absolute flex flex-col gap-6 md:gap-8 p-4 md:p-8 bg-gradient-to-r from-greyDark/50 to-greyCardDard/50 backdrop-blur-md rounded-3xl top-20 md:top-24"
          >
            <div
              class="flex flex-col md:flex-row justify-between gap-14 md:gap-32"
            >
              <h2 class="text-2xl text-light uppercase">
                Get in touch to see how we can collaborate on your vision
              </h2>
              <div class="flex flex-col gap-16 md:gap-24">
                <div
                  class="flex md:flex-row flex-col justify-between md:items-center gap-12 md:gap-32"
                >
                  <div class="flex flex-col gap-2">
                    <label for="fullname" class="text-light text-2xl"
                      >Full Name</label
                    >
                    <input
                      v-model="fullname"
                      type="text"
                      id="fullname"
                      class="border-b-2 border-light"
                      required
                    />
                  </div>
                  <div class="flex flex-col gap-2">
                    <label for="email" class="text-light text-2xl">Email</label>
                    <input
                      v-model="email"
                      type="email"
                      id="email"
                      class="border-b-2 border-light"
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-col">
                  <label for="textarea" class="text-light text-2xl"
                    >Anything about your project</label
                  >
                  <textarea
                    v-model="message"
                    name="textarea"
                    id="textarea"
                    cols="10"
                    rows="6"
                    class="border-b-2 border-light text-light"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="flex items-center flex-row justify-between">
              <h3 class="text-2xl font-LibreBaskerville text-light">
                GET IN TOUCH
              </h3>
              <button
                @click="sendEmail"
                :disabled="isLoading"
                class="text-2xl text-light p-3 bg-gradient-to-r from-greyDark to-greyCardDard rounded-xl"
              >
                {{ isLoading ? "SENDING..." : "SUBMIT" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayoutView>
</template>

<style scoped>
input::placeholder,
textarea::placeholder {
  color: transparent;
}

input,
textarea {
  color: inherit;
  background-color: transparent;
}
</style>
