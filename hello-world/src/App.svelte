<script>
    import About from "./components/About.svelte";
    import Text from "./components/Text.svelte";
    import Person from "./components/Person.svelte";
    import Skills from "./components/Skills.svelte";
    import Input from "./components/Input.svelte";
    import Photos from "./components/Photos.svelte";
    import ButtonCount from "./components/ButtonCount.svelte";

    export let name;
    export let lastName;
    let svelteLogo = 'https://arepa.s3.amazonaws.com/svelte-logo.png';

    const data = {
        name: "Eduardo",
        lastName: "Flores",
        age: 29
    }
</script>

<main>
    <h1>Hello {name} {lastName}!</h1>
    <About/>
    <Text anotherText="Hola!"/>
    <Text/>
    <Person name={data.name} lastName={data.lastName} age="{data.age}"/>
    <Person {...data}/>
    <Skills/>
    <Input/>
    <ButtonCount/>
    <img src="{svelteLogo}" alt="Svelte">

    <Photos/>

</main>

<style>
    /*global styles must be on main component*/
    :global(body) {
        background-color: #d7d7c7;
        color: #008181;
    }

    /*global variables*/
    :global(:root) {
        --theme-color: #777;
    }

    :global(body.dark-mode) {
        background-color: #1d3040;
        color: #bfc2c7;
        transition: background-color 300ms, color 300ms;
        --theme-color: #bfc2c7;
    }

    /*applying global variable*/
    p {
        color: var(--theme-color);
        font-size: 22px;
    }

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    main img {
        width: 30%;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
