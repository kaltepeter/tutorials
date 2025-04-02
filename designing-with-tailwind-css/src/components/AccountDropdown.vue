<template>
<div class="relative">
    <button @click="isOpen = !isOpen" class="z-10 relative block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:ring-0 focus:outline-white focus:border-white">
        <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Your avatar">
    </button>
    <button tabindex="-1" v-if="isOpen" class="fixed inset-0 bg-black opacity-50 h-full w-full cursor-default" @click="isOpen = false"></button>
    <div v-if="isOpen" class="bg-white rounded-lg py-2 w-48 mt-2 shadow-xl absolute right-0">
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a>
    </div>
</div>
</template>

<script>
import mitt from 'mitt'

export default {
    data() {
        return {
            isOpen: false
        }
    },
    created() {
        const emitter = mitt()

        const handleEscape = (e) => {
            if (e.key === 'Esc' || e.key === 'Escape') {
                this.isOpen = false
            }
        }

        document.addEventListener('keydown', handleEscape);

        emitter.emit('hook:beforeDestroy', () => {
            document.removeEventListener('keydown', handleEscape)
        })
    }
}
</script>
