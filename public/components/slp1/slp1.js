const Slaapkamer1 = {
    template: "#slp1-template",
    methods: {
        clickSchilderijen: function() {
            this.$router.push({ name: 'Schilderijen' });
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { Slaapkamer1 }