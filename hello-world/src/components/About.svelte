<script>
    let someText = 'SWE at Mercado Libre';
    let count = 0;

    function handleClick() {
        count += 1;
    }

    function resetCounter() {
        count = 0;
    }
</script>

<style>
    p {
        color: var(--theme-color);
        font-size: 22px;
    }
</style>

<div class="About">
    <p>{someText}</p>
    <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
    <button on:click={resetCounter}>Reset</button>
</div>
