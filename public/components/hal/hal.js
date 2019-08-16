const Hal = {
    template: "#hal-template",
    methods: {
        clickTrap: function() {
            this.$router.push({ name: 'Trap' });
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { Hal }