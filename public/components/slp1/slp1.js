const Slaapkamer1 = {
    template: "#slp1-template",
    methods: {
        clickSchilderijen: function() {
            this.$router.push({ name: 'Schilderijen' });
        },
        clickDoosjes: function() {
            this.$router.push({ name: 'Doosjes' });
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { Slaapkamer1 }