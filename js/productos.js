const productos = [
  {
    id: 1,
    nombre: "Lenteja",
    precio: 1200,
    imagen:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHERUUEhIVFRUXGBgaGBgYGRoeHRoeHxgaGBgbGhsgISggGRolGxoVITEkJSkrMC4uFx8zODMtNygtMCsBCgoKDg0OGxAQGy8iHyYtLzUwLy4vNy0vNS8tLS0tLS0vMjUtLzUuLy0tLS0tLS01LS8tLS0tLS0tLS0tLS0tLf/AABEIAKsBJwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIHAf/EADsQAAEDAwMCBQEFBwMEAwAAAAEAAhEDBCEFEjFBUQYTImFxgRQyQpGhFSNSscHR4WJy8CRDgrIzksL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAoEQACAgICAQMDBQEAAAAAAAAAAQIRAyESMUEEIlETYXEUMkKh8CP/2gAMAwEAAhEDEQA/APuKIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIhMIAihXWp07cYO49m5VfW1moBimJ7yMfTqspZoR8mkcUmXqLK0PEDy0l7gwTALoE/E8/4K6t8RER6mung8g/ks/wBVAv8Ap5mlRZG98RVWguDCQOjC2fkDk/nPsufh3xwzUQ7exzWgYecA5giYhSvUwbD9POrNkijWd8y8EtIIxnpnjPCkrdSTVoxaa0wiIpICIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCKn1vXG6cIEueXNaAO5MKk1DW6jy1grMB5cIlw+A2D+awn6iMXXZtDBKWzRXeqtpyGZfMRDo5g+qIMZ69FVazcNrs/e7iBwGlw3HoIBG74Ko9bvq1tRL6DRVIE5cWz8GCCfmPlUlHWq2n0v8ArWNyTD6by4RgzuAG0889lx5MsprfR048KRcVdXbpQl9Co2n0eGl0T0MSR9VVarq97Z127KZNKoQA533WHj1kTtH945U7RalLVKO5tWrUAJbJeQMSIgQHY7gr8tLelo27zKrnNcTtNUiAI+70B68iY/XH7m2ro5XWji9fuq1iTtA2MJa0fE5H0IU7dS0+3O/zPLDYgSYbHJd0Ee6gahpztcpONvUdRkeh4ja7n8JGW+4ifdR9A0S8saY33LTH4dpcB8O3AkfRQ1a06Jvezrch9wAbazZsiZfDXHsW5Dh8lQqvnWNSDYOfuG7e1z3g/wAQMYAn8J591Gdpt7QqFwuooufMNY4kAnOwEnrjqBnstTst6DC2oSdwhxe4gkfMiOekKY0ltktu9ECwua1+P3o8phBim0jfzgu5AEdAtCzX3WDWAEukhrWnk/GJOAqGx0WjQeH0ix7XNkbjvIj+Cc5BznoFLr2Tbw/9uRjdHrbxMRBHA6q0ZSTtOjNqL01ZvKd7TeQA8Sek5UhfPdQsG+V6az2tbncXSWxkkF0xj3+hVzba3Us6Y9LqrQBGJd+nK7IepvUkcs/T+Ys1KLhZXTbtgc0jIyAZg9Qfdd11J3tHM1QREUgIiIAiIgCIiAIiIAiIgCIiAIiIDxWqiiC5xgDquVve07kw10nsvd0zzGOEAyDg/Cx2h2z6dy3dQqNgnPqj5MiP1WM5yjJJLRrCEZRbfZtkVZqeqi1gN2kzme0ZiFnn659uftFUSeG5GOfhVyeojHS2TDBKWzQO1um+fL9fIBBESstqviW6rAmlTcGiZwBxgwScjHSVw1ajXaxopuosaHAudJ3Rul23EbjkchZu9r3epbtgAY07Z3HaOOjQTgHsFxZM85as7cWCC2aK3qsphrqtQ1KjxLW4MSJhjQJMDkn9Aq9xqCozAowdz2tEktnqWekHHUrhXq0LGk2tbWwr1HjY14b6n9z327h+f5qOzV7rTqJc3yqobO9rC7Bkk4eQ6fr0wFmjQt9VtX1iypSqihJAfuy0gjnb3mBBiZ6Lo7dodBxpDz2gucWCGuIMk7ckHPTGO+Actouv3muU6jDRpeXkb6jtoP8ApgSXECMqLSsLWsGs+2VmEO21DvkDvJ5aOxnqJVqp0QlyWjWWguXjftpMa6CGNfuj2PpDQfgnPdU+parUvqhovsqtRtMhxgCCeWyQT6f58d1OPh20oMOyrX2RMsrEDjkRhdNM0S0tz5lHzQ57fVUNaoS7tuBcQSPjCi4jfwQaTbjWaT20ralRa2Ww8vpmfbbLhyOgVlpT26a0UKhexzROAXAicu3CZE/kqbXhUtHb7e921Bgh7AQ8c+raBxJzC9Xfi6na0zveDDc8ScKrXwTXz0W3iStV1nyWWdw0O37jkyGbSDgZOS3GOirPEdk9tI0qt1SqnBNKqwtn/a6SWnsf1Uzw61mmUXOtq1u9z5cNwc0mZIaX7iYEwPT9FM0+sdYb5l7TpNLT6WjO2DyX9e+MfKiNRVL/AH9lXa/H++w0Kpb6XTimwUzjecyT/uJkjtlQfEGpG5dto3NBj9sg1HZbniRktOcHj+XrUG3Gs1S2mKTrUFu4OcZfHIjaRG4dT9FKbasvqrWVaDKbaJDmE+UZdBA2DMCD1jMKQVFvqrnACrdUWOaRuDQSHDBw+Y/TqtNbXz74GGlrRw5wIn3GMj34Vf4gtmEtNzdDyA4ENftaQ4GWkPECPgDsZBIXG4rXbK1MW53UHNl1SoGktOI2gFrnAjuMRzlWRD2WVvVdZ1NwuA17nNljiYgQPT8juOq3tneNuxjB6hfN7iwt7gtfLXVGuBD3HgDoI5jJAMqzpVHsILXgj/SSD9FrizOD+xnkxKX5N8iy1vrdS0y/1MESMkjPxK0tKs2sNzSCO678eWM+jinjcezoii0dQp1zDXAk8e/x3UpXUk+irTXYREUkBERAEREAREQBERAF5e8UwSTAAknsj3imJJAHcqI/U6JB9QOOO/x3VXJLtkqLZAufEdOdtIhzj34/uq6612pT/GM8AN/qq683taTbhgzw4w09xIEz7rP3viKpbMcalEtAMbpLmnsQ4chedLNN+Tvhhj8F7WqUadQVKlYyGxtb90Tk5gycDr0VS4U9SqGo23c4ZHmGo2MdQN+OuYlc/DdnR1SmHODqj3AP2kna1rvuxEDjvn8lX+L/AA7Us2MNDzBT3APYw7oDjlw3HGTyZAmYgFYpO6NbitEdlf8AalR7Kt5Tp+WYjcC4iOW52tHTrwVZ3E6BabaHm1vvP3AbnZz+AZGcf4XfQtKborS3Y1rX+qo0uNRzjEZcQAMRiI9l3az7A7fScRRdAeHRtpBoMFmBA6Rxxwo10izb8mX0jWH63cNqDzG0aEZEAO5DxuPXuBlWl/q9huFUU6bi104aNxPeOXRzmeO6l395ZXTHbA+ocyaIe8g9ztloPWDzKqvB9K2NUvYyoLiHt/fCHbZEy2AGjAM85+it9/BHjfZY1/EVPXWvpUKYuHFuWEYE4G+cNHz9Fa2l5XpUAPsRBY2NjHUg0wOGDcMdpA+Fl9evbrT7ukylTDDVcAXNgsqAZLZgO8wDdAgHPUTGlqX1axol5oPeQDDQMkx2mR/zlQ00vyV0VFv4QZrrXV67fKdUgiiJ2tHTzGggOeeTx2zCheJ7C4uKjbmiyqaO4GrTZVLPMaIDi0BwJMA8QTiFK0O81DxDRdt8ui1ziTUkkxP3GNA5AkEk/Q5Ui+8SfZC61Z5fm0wJ8wlrACPSZj1SO08ZjhTckyVG92Vdx+zrtgqWxa14yKb3u2u7tcHHn468zkKLpHiupqLiy3thLSWkNptAafknathpWmUNOBeBT3ugve0NE478xyeepVbr9o/Uae6nTcBOK7HNBDR94xMuHIiD3RSQZkdW029trgVqtPbScYLKDpyeN3USewV3q1RtC2Iq276dOJ3CWx1y5kR9eVGr3NGk2RXqER1eeehPTt0+im0bPU67WilUpOYfvODSyQf4Q/DumYjKXyolrj5Hhzxra1qW0UXUwBENa4j6ECV+VNXZd1Xs+zV+kVGsqNdkdTBa6Pddn2F5YsFO1oUgWgCKnpAxgtc0bXj4iFd2lwNKo/8AUVBviXuOJPWOzRwI7JKuyE2ujK6Bf1atWtTuLatVpMJa2aTs5BktPfGArV2uNuavl0WVS5o9TQ13o4jcfwyOhXqlqlsym59K4dTc5znRBLZPA2kcE9AR7KFf3dzY1Q77dakuGW1G7YjIghxJ56oqb+BJPyWNvpFKtUdWLXUq5JILi+JiA7yyYie0TzKkuphjW1H1KHmSNziCAc42mQZ98ys1aeMHC4LazW12NbzRY5zWkx94lvMfor2hf0NVINO3q4GHsZtgex6/EFS0/wCRC10dhZ1K122oLovbtzRaQAI4MjlueueOitHXb2VRTYC10TuB4+QDP6Kr02xa0vrMLg92A91Pa4Ad2mCT74mF+WOtU3iGVqlZ4wXMZLQZ+D/NRsmrNXodRjawa+jD+jwXET7g8E/AWsXyXT9YrWjj9pa4OcYY0SZHyMf2X0fQr8XjI/E2JzOOhXb6bJ/FnH6jHXuXRZoiLrOYIiIAiIgCIiAIiIDldUBcsc08EQsq/wAI1gfTdAD3pmf/AHV9q2omwjAAP4jx8fKhWniEVntZG4kx6Qfz7LmySxOXGXZ0Y1lUbj0UWo+Fbmid4qsqMaCRSDS3JMydzy1wGcH2+tCQNMqG4vTtxtYXHcGz97dAhp4A6cr6le2/2phbMT17f3WU1PwlXvBBuKe3q00idw5g+rrwssuB37EaY8+qkzM3Ny68DKtpUe2kXet1KnIcOpGMnESOJzxCVNdbey23p1bgtiYMAHs5ziIOFJvhUP8A8dZtM8REj4iR/JZ2na3Rquq3NUUKYO2WAg1OIJLgNuTEwVx62dXE/aD7tjttShUdBLsvYSWzJG4OiclonOB7lSh4muNWD2WtuWlvpJqlo244DRM8/C71g6kP3NbP8VQkyfdw4H/iq/RNTNlcVftdPy3w0Nf6YePVw4c/8ClU7JaLfwlZGwtRSNU+d6nPa4NgOcS5wbtAJbuJznn6Kkt9RqPuqr6lMUn0G7XAHcXNdkPbgSzEg/IgFfmv0qxD7i3qlrg0kN5D46e0xz8dFJu9VbpVECG1bksh7mgFxcRmnT+uMfz4J3v5Fbokv1B2qscLeu2nUA9Li7E+5AIg5VVqOpm1Ap3VeuXnG6m5jGuPB2EBxOcRM8YClWnhZt3T81lvVt6zmiSXjPyzdHfkA/C56F4Yu2VfMq1KJY0ktEEndBG48hpEkYJU0itlhpl2dGt2bg5rSSGB5G8znI5nPZeLWhb39V1e4twKn3WGq2DsAEENPOZPsp9Pw7Wv7gXD64YGNLabWt3ETy4OJgEgDhsx1WW8cUH6Q+n9pqNuaNRxa1hY7duGWyASXDngjMd0Sbeg5RqmWOt21neltG3bTFZ2Q5roaz/W5oMOA7HldtVvTY0m0f2m1r3EM3eTuxGdg3YIHuVkb6lUoUtws3hsfho7SB9Ggt+V68N0mMa2rWpUamJDHVQX9wSDLfeCforcNWLT0aW50ancUCxlejcDb90tax3H4TOHfl8rhpJvrVu/zW02HO2oSSB75Of1U+08Su1kGnQtC6PSd5aGDHBMHoegKk6raVCxtJ1nReS37zXANaY64Dm/SVnVaZa2VeleJK15dup1K9MtAxGAPnEzj9VfalafaSw1aTa1NsmWmSMRMH7w9hKz1y8yLapRFKnALRQ9TnmchhgbI6lw6j5HnWQNOoOcKt3bwMB7QQ49G7gMOPHPVWpt6Itdssf2Va6bTfcWlOm933vXBDRidk4YBzHz8KG67022JqVGW9aqcl2xhaPZoiAPjJ+qz+jVKdSpSDqNzTa4+ov8wMdgmHSACCeh5lfSa9Sjes21GMeyOHNBH5HhJXF7bFprSM7beJDZU2uo2/7kmBTpt2uBJ5awYLTPAyOfiV4hFzqNuX0WvpVIwHOZtP8AvG7GJz+cqk0XT7fT7uo5lfIJaynUDiGjmA8uPIIzHC7az4wbbuNOrTLBMO3/AHXCOGkYcCOxU1cvbsjrb0XGlWT6VBn2i7e1/H3Wls9pbM//AGXCi6pQJp2IpeWz73RhJz6PSYPMg44VXR0alrcVCatKny2mXSCe5B9Rb7EzzwtjpdOmylsGAMekx+QUNNEckeNOZU2l1RzS49A4gAAnHaVr/Cmnts6W4AgvyZj+wj4WOoaXXtmueJrU9zvug7m5BA2idwzz+iutC1iqajWAPc0kAgtOB/8AmP6LfA+MrkjHP7lUTZIiL0ThCIiAIiIAiIgCIiA43dqy8bteJH1/oodnoVCyduYwz3LnH+ZVkijiruieTqgiKNf3JtGF0TH6e6Skoq2ErdIh3Phy1uHbzRbvmQ4SM98ESqOtZfskO8zbUBODBMCOCDMf5Ui71x8QHDPYfy6qma+8qYNrVHu0D8w7dhcGTJDJ+xHZDHKP7mUt7aMvq7fKa6k2ZqEMIa5o5EwBuOBPPzC96zp1tqQZQbSzz+7EFog8nsT3VzTsL232h1F9QQJdLJ4zIDuZXm38G3FEvqU3AGoZNKoT6eghwJx1iMSsvpZPCNecF2zEX9lUtmfZodTG0NY9+RAaGiC3G6BMY68KHpFoPDdbzC911Ud6WM2gOBP8EvMn3Mdcre3ngi81QbalRlJszLCXOxxEiP0XK+sXaPTLG0XBzeHimXBxHUkDM/PVHCcVbXZb6kJOkyHqVXUqjD5FOg0kcVKhnj2bE/8Akq6wtKLKP2e8uXvqxL2F/lgTn07YkTOZPCj2mr6hq9Q0mUHUgBmqQY/J0QT9V7u/AdFzXVKrnPq8l5fl3tnAB46KGq09BPymd3eLqtg/yKbadWBhwfkDgB/OY9+i6fabnUwH7ASTDCxpcKf8Ti44cYxA7q0uvBdlVbAtqTDHLBtPfLmkE/1XWne+S80g3LAPSwEwPw4HAxj4VJV4EWn0VB1qjpVZtK4qVKheMAtLS3/xAEg5z7L3c2GnU2Oc23ZnMOY4SSe7hiSpLq1zdVN7AKGzANWnJeMEiJBa2QOv0UujXv70GRbMaD/rd5g/F0GzqJznocSX2Il2fNToz9EqOqNkeY/0ttqlR+3qJG3PHv8Akrq78P3l4xtZj6wrCI3VA0ls+oQZAJExI5iVr6+v/sVm11qabWtJHlgFkDmCIAx0MFddNvDqLPMczZuOB1A6T0lTzbdss1SpGRfqdi8CnWZVo12fxE7mnieYcCPYhV1DxLc0HGm4b6W7aKpnynDpJIMfHdbo6Va6g5xrUqVZzMDe0OIEAj4OUN1RoVhQ27QWy2BDcGC2eh9uueyJxY9yRT2+g293S9VbzyciXEAdQBBkRjJkrnbXOnPml5rt4O0tNR+6RyMGD9MFWTPC9pQquqtpy4/gc4mnPfZwJ+FGt9Hr06nmWdiKbyYeWtaxrm54JHM5wIPXpEpXpbI5LzopdV0FtQtPmud6xxT2Vi3+EEAbveRwDELT2dG2qUg0U6b2RBD27p/3E5lWttY3N9tZUtntEjcXbRHcyHHPwrJvgWhTcS2tWaCZI3NP6uaT+qu/T5Jq1r+irzwjplVb+AHDNK62UyZDDTnaDmAdwx26+6vbLwZa2+XNc93V294n6B0K/oUhQa1o4aAB8AQF0XoLFD4OF5ZfJxtbZlo0NY0NA6KDfa3TtSWgFxHMcD2lWio9U8NU9QeXipUpk87C2D7wWnKjKp8f+dDHwv3kzTNXZqJIaCHATB7cKwVfpGlN0tpDXOdPJdEn5gBWCtj5cfd2Vnxv29BERXKhERAEREAREQBERAF+OaHiCAQehX6iAiUtLoUXbm0aYd3DRP8AJS0RQkl0S232ERFJBWalqws3bYz3PH+V4sNWN08NgGeY6f8AP6qRqOlUtRjeDI6hxH+CvOn6NR08ywGe5cT/AIWDjl53ejS48fucta0f9pNG1wY4dY5+YgwqAeDq73DdcMgdmE/+xIW0RWlhhJ8mtiOWcVSZlD4cuB/3WO94c38xlQqmn3GkiXtNWSTupNLo7AjnA6wtwizfpYeNFlnkuz5611TUjsbRqCcS6m4Ae+QF1oeFrvRWnbdCs0mSKvpIJ5DS0HHtC3qpPEVnXuNpowY5aXRP5gqsvTqMXq2aLM5SXhFBb+HamttLK76YZ1FNxLuZHLRtVjR8GCiA0XNXaOhDJ/OF+6JZXdKqDUptY3qdwMjthahTixRlH3RojJklGXtkUtv4VtaBkUzuPLtzgXe7oIBPypDtCtnMLfKEO55k9vVzhWSLdY4rdGPOXyUDPCVBp+9VI/hL8fyn9Ve06YpAACABAXpFMYRj0qIlOUu2VN3qppPIaBAxn9V007VftbtpbBicf8wvy+0Vt04uD3sJ5iI/Ihe9N0punkkOc4nkuj+gXNGOf6m37TRvHx12WCIi6zEIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//Z",
  },
  {
    id: 2,
    nombre: "Garbanzo",
    precio: 900,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-O3JsfxILaMCZRIIYsNLJQm2EmR7221S5A&s",
  },
  {
    id: 3,
    nombre: "Porotos",
    precio: 1500,
    imagen:
      "https://www.argentina.gob.ar/sites/default/files/2023/05/whatsapp_image_2023-05-29_at_14.38.35.jpg",
  },
  {
    id: 4,
    nombre: "Girasol",
    precio: 750,
    imagen:
      "https://images.squarespace-cdn.com/content/v1/561718ebe4b062a227c4fcf2/e916992a-7901-40bf-98f5-c86f12b7fb9b/122334.png",
  },
  {
    id: 5,
    nombre: "Chia",
    precio: 1850,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3eiPo9lUFprTJ0Jv9Rep2hn3CPQMWa_Dpg&s",
  },
];

let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

let productsContainer = document.getElementById("products-container");

function renderProductos(productsArray) {
  productsArray.forEach((producto) => {
    const card = document.createElement("div");
    card.className = "card mb-3";
    card.style.maxWidth = "18rem";
    card.innerHTML = `
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height: 150px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <input type="number" id="quantity-${producto.id}" min="1" value="1" style="width: 60px;" />
                <button class="btn btn-primary productoAgregar" id="${producto.id}">Agregar</button>
            </div>
        `;
    productsContainer.appendChild(card);
  });
  addToCartButton();
}

function addToCartButton() {
  const addButton = document.querySelectorAll(".productoAgregar");
  addButton.forEach((button) => {
    button.onclick = (e) => {
      const productId = e.currentTarget.id;
      const quantityInput = document.getElementById(`quantity-${productId}`);
      const quantity = parseInt(quantityInput.value);

      if (quantity > 0 && !isNaN(quantity)) {
        const selectedProduct = productos.find(
          (producto) => producto.id == productId
        );
        const existingProductIndex = cartProducts.findIndex(
          (product) => product.id == productId
        );

        if (existingProductIndex !== -1) {
          cartProducts[existingProductIndex].quantity += quantity;
        } else {
          cartProducts.push({ ...selectedProduct, quantity: quantity });
        }

        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        alert(`${selectedProduct.nombre} agregado al carrito`);
      } else {
        alert("Cantidad no válida. Debe ser un número mayor a 0.");
      }
    };
  });
}

renderProductos(productos);
