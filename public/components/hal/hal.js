const Hal = {
    template: "#hal-template",
    methods: {
        clickTrap: function() {
            this.$router.push({ name: 'Trap' });
        },
        clickBorden: function() {
            this.$router.push({ name: 'Borden' });
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { Hal }