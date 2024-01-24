document.addEventListener('DOMContentLoaded', function () {
    const drama = document.querySelector('#drama')

    async function getData() {
        try {
        const response = await fetch('https://opensheet.elk.sh/1tPKgLzcocGA1UtTS59wKYKLBX3qzM9iHOFAG1t4yRBc/Sheet1')
        const data = await response.json()
        
        data.forEach((row) => {
            console.log(row);
            const container = document.createElement('div')
            const titlecontainer = document.createElement('div');
            const title_eng = document.createElement('h1')
            const title_cn = document.createElement('h1')
            const infoContainer = document.createElement('div');
            const image = document.createElement('img'); 
            const mdl_rating = document.createElement('p')
            const my_rating = document.createElement('p')
            const reccomend = document.createElement('body')
            const date = document.createElement('h3')
            const actors = document.createElement('h3')
            const comment = document.createElement('body')

            container.append(image);
            container.append(titlecontainer);
            container.append(title_eng)
            container.append(title_cn)
            container.append(actors)
            container.append(infoContainer);
            container.append(my_rating)
            container.append(reccomend)
            container.append(date)
            container.append(mdl_rating)
            container.append(comment)

            image.src = row.url;
            image.setAttribute('alt', `Poster for the drama ${row.english_name}`);
            image.classList.add('poster-image');

            titlecontainer.classList.add('title-containter')
            infoContainer.classList.add('info-container');
            container.classList.add('container');

            infoContainer.append(my_rating);
            infoContainer.append(mdl_rating);

            titlecontainer.append(title_cn);
            titlecontainer.append(title_eng);

            drama.append(container);

            title_eng.innerText = row.english_name;
            title_cn.innerText = row.chinese_name;
            actors.innerText = `Actors: ${row.actors}`;
            reccomend.innerText = `Would Bella reccomend? ${row.recc}`;
            my_rating.innerText = `Bella's Rating: ${row.my_rating}`;
            mdl_rating.innerText = `    My Drama List's Rating: ${row.mdl_rating}`;
            date.innerText = `Year it was made: ${row.date}`;
            comment.innerText = `My review: ${row.comment}`;

        })


        } catch (err) {
            console.log(err)
        }
    }

    getData()
});
