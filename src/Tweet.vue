<template>
    <div>
        <div v-for="x in text">
            <b>@{{username}}: </b>
            {{x}}
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: 'Manow',
                text: [
                    '12345',
                    'test',
                    '3ช่ามาแรง'
                ]
            }
        }
    }
</script>