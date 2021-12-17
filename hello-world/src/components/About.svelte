<script>
    import Button from "./Button.svelte";

    let someText = 'SWE at Mercado Libre';
    let count = 0;
    let styles = {darkMode: false}

    function toogle() {
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle("dark-mode");
    }

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
    {#if !styles.darkMode}
        <p>{someText}</p>
    {:else}
        <p>Hello DarkMode!</p>
    {/if}
    <Button text="Click" count={count} on:click={handleClick}/>
    <Button text="Darkmode" on:click={toogle}/>
    <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
    <button on:click={resetCounter}>Reset</button>
    <button on:click={toogle}>DarkMode</button>
</div>
