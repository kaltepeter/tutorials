<template>
  <header
    class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:px-0 sm:py-0">
      <div>
        <img class="h-8" src="/img/logo-inverted.svg" alt="Workcation" />
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-500 focus:text-white hover:text-white focus:outline-none focus:ring-0"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="sm:block"
      :class="isOpen ? 'block' : 'hidden'"
    >
      <div class="px-2 pt-2 pb-4 sm:p-0 sm:flex">
        <a
          href="#"
          class="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1"
          >List your property</a
        >
        <a
          href="#"
          class="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2"
          >Trips</a
        >
        <a
          href="#"
          class="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2"
          >Messages</a
        >
        <AccountDropdown class="hidden sm:block sm:ml-6" />
      </div>
      <div class="px-4 py-5 border-t border-gray-800 sm:hidden">
        <div
          class="flex items-center"
        >
          <img
            class="h-8 w-8 rounded-full border-2 border-gray-600 object-cover"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt="Your avatar"
          />
          <span class="ml-3 text-white font-semibold">Jane Doe</span>
        </div>
        <div class="mt-4">
          <a href="#" class="text-gray-400 block hover:text-white">Account settings</a>
          <a href="#" class="text-gray-400 block mt-2 hover:text-white">Support</a>
          <a href="#" class="text-gray-400 block mt-2 hover:text-white">Sign out</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AccountDropdown from "./AccountDropdown.vue";

export default {
  components: {
    AccountDropdown,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
