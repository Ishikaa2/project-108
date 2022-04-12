function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bgAzAjVYW/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults (error, results)
{
    if (error)
    {
        console.error(error);
    }

    else 
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('Dog Barking');
        img1 = document.getElementById('Cat Meowing');
        img2 = document.getElementById('Dolphin Whistles');
        img3 = document.getElementById('Elephant Trumpet');
        img4 = document.getElementById('Goat Bleating');

        if (results[0].label == "Dog Barking")
        {
            img.src = 'dog barking.gif';
            img1.src = 'cat.png';
            img2.src = 'dolphin.png';
            img3.src = 'elephant.png';
            img4.src = 'goat.png';
        }

        else if (results[0].label == "Car Meowing")
        {
            img.src = 'dog.png';
            img1.src = 'cat-meow.gif';
            img2.src = 'dolphin.png';
            img3.src = 'elephant.png';
            img4.src = 'goat.png';
        }

        else if (results[0].label == "Dolphine Whistles")
        {
            img.src = 'dog.png';
            img1.src = 'cat.png';
            img2.src = 'dolphine whistles.gif';
            img3.src = 'elephant.png';
            img4.src = 'goat.png'
        }

        else if (results[0].label == "Elephant Trumpet")
        {
            img.src = 'dog.png';
            img1.src = 'cat.png';
            img2.src = 'dolphin.png';
            img3.src = 'elephant trumpet.gif';
            img4.src = 'goat.png';
        }

        else 
        {
            img.src = 'dog.png';
            img1.src = 'cat.png';
            img2.src = 'dolphin.png';
            img3.src = 'elephant.png';
            img4.src = 'goat bleating.gif';
        }
    }
}