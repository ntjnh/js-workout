(function startTime() {

    // Get the time
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // Function to add a leading 0 to hours lower than 10
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        };

        return i;
    }

    m = checkTime(m);
    s = checkTime(s);

    const digitalClock = document.getElementById("digital-clock");
    digitalClock.textContent = h + ":" + m + ":" + s;

    setTimeout(startTime, 500);

    // hours past switch statement as a function
    function hoursPast() {
        switch (h) {
        case 0:
        case 12:
            document.getElementById("twelve").classList.add("on");
            break;
        case 1:
        case 13:
            document.getElementById("one").classList.add("on");
            break;
        case 2:
        case 14:
            document.getElementById("two").classList.add("on");
            break;
        case 3:
        case 15:
            document.getElementById("three").classList.add("on");
            break;
        case 4:
        case 16:
            document.getElementById("four").classList.add("on");
            break;
        case 5:
        case 17:
            document.getElementById("five").classList.add("on");
            break;
        case 6:
        case 18:
            document.getElementById("six").classList.add("on");
            break;
        case 7:
        case 19:
            document.getElementById("seven").classList.add("on");
            break;
        case 8:
        case 20:
            document.getElementById("eight").classList.add("on");
            break;
        case 9:
        case 21:
            document.getElementById("nine").classList.add("on");
            break;
        case 10:
        case 22:
            document.getElementById("ten-b").classList.add("on");
            break;
        case 11:
        case 23:
            document.getElementById("eleven").classList.add("on");
            break;
        }
    }

    // hours to switch statement as a function
    function hoursTo() {
        switch (h) {
        case 0:
        case 12:
            document.getElementById("one").classList.add("on");
            break;
        case 1:
        case 13:
            document.getElementById("two").classList.add("on");
            break;
        case 2:
        case 14:
            document.getElementById("three").classList.add("on");
            break;
        case 3:
        case 15:
            document.getElementById("four").classList.add("on");
            break;
        case 4:
        case 16:
            document.getElementById("five").classList.add("on");
            break;
        case 5:
        case 17:
            document.getElementById("six").classList.add("on");
            break;
        case 6:
        case 18:
            document.getElementById("seven").classList.add("on");
            break;
        case 7:
        case 19:
            document.getElementById("eight").classList.add("on");
            break;
        case 8:
        case 20:
            document.getElementById("nine").classList.add("on");
            break;
        case 9:
        case 21:
            document.getElementById("ten-b").classList.add("on");
            break;
        case 10:
        case 22:
            document.getElementById("eleven").classList.add("on");
            break;
        case 11:
        case 23:
            document.getElementById("twelve").classList.add("on");
            break;
        }
    }

    // minutes
    switch(m) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        document.getElementById("five").classList.remove("on");
        document.getElementById("to").classList.remove("on");
        document.getElementById("oclock").classList.add("on");
        hoursPast();
        break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        document.getElementById("oclock").classList.remove("on");
        document.getElementById("five").classList.add("on");
        document.getElementById("past").classList.add("on");
        hoursPast();
        break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        document.getElementById("five").classList.remove("on");
        document.getElementById("ten").classList.add("on");
        document.getElementById("past").classList.add("on");
        hoursPast();
        break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        document.getElementById("ten").classList.remove("on");
        document.getElementById("past").classList.remove("on");
        document.getElementById("quarter").classList.add("on");
        document.getElementById("past").classList.add("on");
        hoursPast();
        break;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        document.getElementById("quarter").classList.remove("on");
        document.getElementById("past").classList.remove("on");
        document.getElementById("twenty").classList.add("on");
        document.getElementById("past").classList.add("on");
        hoursPast();
        break;
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        document.getElementById("twenty").classList.remove("on");
        document.getElementById("past").classList.remove("on");
        document.getElementById("twenty").classList.add("on");
        document.getElementById("five").classList.add("on");
        document.getElementById("past").classList.add("on");
        hoursPast();
        break;
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        document.getElementById("twenty").classList.remove("on");
        document.getElementById("five").classList.remove("on");
        document.getElementById("past").classList.remove("on");
        document.getElementById("half").classList.add("on");
        document.getElementById("past").classList.add("on");
        hoursPast();
        break;
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        document.getElementById("half").classList.remove("on");
        document.getElementById("past").classList.remove("on");
        document.getElementById("twenty").classList.add("on");
        document.getElementById("five").classList.add("on");
        document.getElementById("to").classList.add("on");
        hoursTo();
        break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        document.getElementById("twenty").classList.remove("on");
        document.getElementById("five").classList.remove("on");
        document.getElementById("to").classList.remove("on");
        document.getElementById("twenty").classList.add("on");
        document.getElementById("to").classList.add("on");
        hoursTo();
        break;
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
        document.getElementById("twenty").classList.remove("on");
        document.getElementById("to").classList.remove("on");
        document.getElementById("quarter").classList.add("on");
        document.getElementById("to").classList.add("on");
        hoursTo();
        break;
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        document.getElementById("quarter").classList.remove("on");
        document.getElementById("to").classList.remove("on");
        document.getElementById("ten").classList.add("on");
        document.getElementById("to").classList.add("on");
        hoursTo();
        break;
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
        document.getElementById("ten").classList.remove("on");
        document.getElementById("to").classList.remove("on");
        document.getElementById("five").classList.add("on");
        document.getElementById("to").classList.add("on");
        hoursTo();
        break;
    }

})();
