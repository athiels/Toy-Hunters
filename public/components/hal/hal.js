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
        },
        clickSchilderij1: function() {
            this.$router.push({ name: 'Schilderij1' });
        },
        clickSchilderij2: function() {
            this.$router.push({ name: 'Schilderij2' });
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { Hal }