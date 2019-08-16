const Hal = {
    template: "#hal-template",
    methods: {
        clickTrap: function() {
            this.$router.push({ name: 'Trap' });
        },
        clickBorden: function() {
            this.$router.push({ name: 'Borden' });
        },
        clickBarometer: function() {
            this.$router.push({ name: 'Barometer' });
        },
        clickPotjes: function() {
            this.$router.push({ name: 'Potjes' });
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { Hal }