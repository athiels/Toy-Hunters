const KeukenOverview = {
    template: "#keuken-overview-template",
    methods: {
        clickOven: function() {
            this.$router.push({ name: 'Oven' });
        },
        clickKeys: function() {
            this.$router.push({ name: 'Keys' });
        },
        clickHoekkast: function() {
            this.$router.push({ name: 'Hoekkast' });
        },
        clickPotjes: function() {
            this.$router.push({ name: 'Potjes' });
        },
        clickVuur: function() {
            this.$router.push({ name: 'Vuur' });
        },
        clickKast: function() {
            this.$router.push({ name: 'Kast' });
        },
        clickKruiden: function() {
            this.$router.push({ name: 'Kruiden' });
        },
        clickPannen: function() {
            this.$router.push({ name: 'Pannen' });
        }
    },
    mounted: function() {
        imageMapResize();
    },
}

export { KeukenOverview }