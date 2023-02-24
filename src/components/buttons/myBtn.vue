<template>
    <button>
        <slot>
            My btn
        </slot>
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
button {
    border: 1px solid white;
    border-radius: 2px;
    padding-inline: 1rem;
    padding-block: .5rem;
    transition: .5s ease;
    cursor: pointer;

    &:hover {
        color: #fabc3c;
        border: 1px solid rgb(185, 185, 185);
    }
}
</style>