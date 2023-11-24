let randomNumber = Math.floor(Math.random() * 3 + 1);

const onErrorImg = (e) => {
    e.target.src = `${process.env.PUBLIC_URL}/img/replaceImg${randomNumber}.jpg`;
};

export default onErrorImg;
