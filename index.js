document.getElementById('showAdButton').addEventListener('click', function() {
    const AdController = window.Adsgram.init({ blockId: "102", debug: true });

    AdController.show().then((result) => {
        console.log('Реклама показана полностью');
    }).catch((result) => {
        console.log('Ошибка или реклама пропущена');
    });
});
