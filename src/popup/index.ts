import AudioController from '../components/AudioController.svelte';

const target = document.getElementById('app');

async function render() {
    new AudioController({
        target
    });
}
  
document.addEventListener('DOMContentLoaded', render);