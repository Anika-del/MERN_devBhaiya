window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const start = document.getElementById("start");
    const star_el = document.getElementsByClassName("star");
    const level = document.getElementById("level");
    
    let easy = document.getElementById("level1");
    let med = document.getElementById("level2");
    let hard = document.getElementById("level3");

    let running = false;
    let boxes = [];
    let speed = 1;
    let y_pos;
    let clr_index;
    let ismoving = false;
    let movedown_interval;
    let parts = [];
    let score = 0;
    let first_click = true;
    let gameOverInProgress = false;

    if (window.innerWidth <= 500) {
        canvas.width = window.innerWidth;
    } else {
        canvas.width = 500;
    }
    canvas.height = window.innerHeight;

    let plt_pos = canvas.height - 103;
    
    
    setTimeout(() => {
        document.getElementById("loader").remove();
        document.getElementById("cake_logo").remove();
        document.getElementById("load_txt").remove();
        document.getElementById("cake_text").remove();
        level.style.visibility = "visible";
    },5000)
    

    function resetGame() {
        running = false;
        
easy.onclick = () => {
     speed = 3;
     level.style.visibility = "hidden";
     start.style.visibility = "visible";
}
med.onclick = () => {
     speed = 5;
     level.style.visibility = "hidden";
     start.style.visibility = "visible";
}
hard.onclick = () => {
     speed = 7;
     level.style.visibility = "hidden";
     start.style.visibility = "visible";
}


        y_pos = canvas.height - 100;
        clr_index = 0;
        ismoving = false;
        boxes = [
            {
                x: (canvas.width - 120) / 2,
                y: y_pos,
                width: 120,
                opacity: 1
            },
            {
                x: (canvas.width - 120) / 2,
                y: (y_pos -= 65),
                width: 120,
                opacity: 1
            }
        ];
        parts = [];
    }

    function movedown() {
        if (ismoving) return;
        ismoving = true;

        let i = 0;
        const movedistance = 65;
        movedown_interval = setInterval(() => {
            plt_pos += 1;
            for (let box of boxes) box.y += 1;
            i++;
            if (i >= movedistance) {
                clearInterval(movedown_interval);
                ismoving = false;
            }
        }, 1);

        y_pos += movedistance;
    }
    
    function fill_star(id){
        let el = document.getElementById(`${id}`);
        el.classList.add("anim");
        el.src = "https://i.imgur.com/yCBUcWi.png";
    }

    function gameover() {
    alert("Game Over!!\nYour score: "+score)
        if (gameOverInProgress) return;
        gameOverInProgress = true;

        setTimeout(() => {
            plt_pos = canvas.height - 103;
            level.style.visibility = "visible";
            running = false;
            clearInterval(movedown_interval);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            resetGame();
            gameOverInProgress = false;
            
            for(let i of star_el){ 
            i.src = "https://i.imgur.com/dW9S0uh.png";
            i.style.visibility = "hidden";
            i.classList.remove("anim");
            }
        }, 1000);
    }

    start.onclick = () => {
    for(let i of star_el) i.style.visibility = "visible";
        start.style.visibility = "hidden";
        resetGame();
        running = true;
        animate();
        first_click = true;
    };

    document.addEventListener("click", () => {
        if (!running || ismoving || gameOverInProgress) return;

        if (first_click) {
            boxes = [
                {
                    x: (canvas.width - 120) / 2,
                    y: y_pos,
                    width: 120,
                    opacity: 1
                },
                {
                    x: (canvas.width - 120) / 2,
                    y: (y_pos -= 65),
                    width: 120,
                    opacity: 1
                }
            ];
            y_pos += 65;
        }

        y_pos -= 65;

        let p1 = boxes[boxes.length - 1];
        let p2 = boxes[boxes.length - 2];

        if (p1.x + p1.width < p2.x || p1.x > p2.x + p2.width) {
            gameover();
            parts.push({
                px: p1.x,
                py: p1.y,
                width: p1.width,
                opacity: 1
            });
            p1.opacity = 0;
            p1.width = 0;
            return;
        } else {
            score += 50;
            
            
            let left = Math.max(p1.x, p2.x);
            let right = Math.min(p1.x + p1.width, p2.x + p2.width);

            if (p2.width - (right - left) < 4) {
                p1.width = p2.width;
                p1.x = p2.x;
            } else {
                if (p1.x < p2.x) {
                    parts.push({
                        px: p1.x - 5,
                        py: y_pos + 65,
                        width: p2.width - (right - left),
                        opacity: 1
                    });
                } else {
                    parts.push({
                        px: p2.x + p2.width + 5,
                        py: y_pos + 65,
                        width: p2.width - (right - left),
                        opacity: 1
                    });
                }
                p1.x = left;
                p1.width = right - left;
            }
        }

        if (!first_click) {
            boxes.push({
                x: (canvas.width - boxes[boxes.length - 1].width) / 2,
                y: y_pos,
                width: p1.width,
                opacity: 1
            });
        }

        if (boxes[boxes.length - 1].y <= canvas.height / 2 - 70) {
            movedown();
        }

        if (boxes[boxes.length - 1].width <= 1) {
            gameover();
        }
        if (first_click) score = 0;
        first_click = false;
        
        if(score == 300){
            fill_star("star1");
        }
        else if(score == 600){
            fill_star("star2");
        }
        else if(score == 1000){
            fill_star("star3");
        }
        else if(score == 1500){
            fill_star("star4");
        }
        else if(score == 2100){
            fill_star("star5");
        }
        
    });

    function items(box) {
        ctx.beginPath();
        ctx.globalAlpha = box.opacity;
        ctx.roundRect(box.x, box.y, box.width, 60, 1);
        ctx.fillStyle = "#3d251e";
        ctx.strokeStyle = "#000";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        for (let j = 0; j <= Math.floor(box.width / 5) / 2; j++) {
            ctx.beginPath();
            ctx.globalAlpha = box.opacity;
            ctx.arc(box.x + j * 10 + 1, box.y - 3, 5, Math.PI * 2, Math.PI, false);
            ctx.fillStyle = "#fff";
            ctx.fill();
            ctx.closePath();
        }

        ctx.beginPath();
        ctx.globalAlpha = box.opacity;
        ctx.moveTo(box.x + 5, box.y + 20);
        ctx.lineTo(box.x - 5 + box.width, box.y + 20);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#eee";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.globalAlpha = box.opacity;
        ctx.moveTo(box.x + 5, box.y + 40);
        ctx.lineTo(box.x - 5 + box.width, box.y + 40);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#ffa1f1";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        let plate = new Image();
        plate.src = "https://i.imgur.com/iyAZrSd.png";
        ctx.drawImage(plate, (canvas.width - 200) / 2, plt_pos, 200, 30);
        ctx.closePath();

        ctx.beginPath();
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "#000";
        ctx.fillText("Score: " + score, 10, 24);
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (running) {
            for (let part of parts) {
                part.opacity -= 0.01;
                part.py += 1;

                if (part.opacity > 0) {
                    items({ x: part.px, y: part.py, width: part.width, opacity: part.opacity });
                }
            }

            for (let i = 0; i < boxes.length; i++) {
                let box = boxes[i];
                items(box);

                if (i === boxes.length - 1) {
                    if (box.x <= 0 || box.x + box.width >= canvas.width - 10) {
                        speed *= -1;
                    }
                    box.x += speed;
                }
            }
        }
    }

    function animate() {
        if (!running) return;
        draw();
        requestAnimationFrame(animate);
    }

    resetGame();
};