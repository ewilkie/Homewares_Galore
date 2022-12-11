/**************************** */
/* Javascript for stores page */
/**************************** */
const storeObj = [
    {
    name: "Melbourne CBD",
    address: "224 - 234 Canterbury Road, Bayswater North, VIC 3153 Australia",
    tlf: "(03) 9729 8077",
    hours: {
        week: '09:00-17:30',
        sat: '10:00-16:30',
        sun: '10:00-12:30',
        },
    },
    {
    name: "Ballarat",
    address: "333 Gillies Street North, Wendouree, VIC 3355 Australia",
    tlf: "(03) 5338 2164",
    hours: {
      week: '09:00-17:30',
      sat: '10:00-16:30',
      sun: '10:00-12:30',
      },
    },
    {
    name: "Melbourne Fitzroy",
    address: "111 Cecil Street, South Melbourne, VIC 3205 Australia",
    tlf: "(03) 9139 5463",
    hours: {
      week: '09:00-17:30',
      sat: '10:00-16:30',
      sun: '10:00-12:30',
      },
    },
    {
      name: "Bendigo",
      address: "6 Marong Road, Bendigo, VIC 3550 Australia",
      tlf: "(03) 5448 1800",
      hours: {
      monthurs: '09:00-17:30',
      fri: '09:00-23:30',
      sat: '11:00-16:30',
      sun: '11:00-12:30',
    },
    },
    {
        name: "Mildura",
        address: "Corner Fifteenth Street & Etiwanda Avenue, Mildura, VIC 3500 Australia",
        tlf: "(03) 5022 1922",
        hours: {
        week: '09:00-17:30',
        sat: '11:00-16:30',
        sun: '11:00-12:30',
      },
      },
      {
        name: "Echuca",
        address: "27 - 29 Nepean Hwy, Mentone, VIC 3194 Australia",
        tlf: "(03) 8585 6500",
        hours: {
        monweds: '09:00-17:30',
        thurs: '09:00-22:00',
        fri: '08:30-20:00',
        sat: '11:00-16:30',
        sun: '11:00-12:30',
      },
      },    
      {
        name: "Bairnsdale",
        address: "58 Bailey St, Bairnsdale, VIC 3875 Australia",
        tlf: "(03) 5153 7800",
        hours: {
        monthurs: '09:00-17:30',
        fri: '09:00-23:30',
        sat: '11:00-16:30',
        sun: '11:00-12:30',
      },
      },
      {
          name: "Geelong",
          address: "25 - 27 Settlement Road, Belmont, VIC 3216 Australia",
          tlf: " (03) 4245 4386",
          hours: {
          week: '09:00-17:30',
          sat: '11:00-16:30',
          sun: '11:00-12:30',
        },
        }
    ]

   /* sort objs in array by name */
   storeObj.sort((a, b) => a.name.localeCompare(b.name));
  
  /* loop to populate page with information stored in array */
  for (let i=0; i < storeObj.length; i++) {
    
    /* create div for each store */
    const storeItem = document.createElement('div');
    /* add styling class for div */
    storeItem.classList.add('store-container-indiv');  
   /* add div to page */
    document.querySelector('.store-container').appendChild(storeItem);
    
    /* add title to page */
    const title = document.createElement('h2');
    title.classList.add('h2');
    title.classList.add('store-title');
    title.innerText = storeObj[i].name;
    storeItem.appendChild(title);
    
     /* another indiv container */
     const another = document.createElement('div');
     another.classList.add('add-tlf');
     storeItem.appendChild(another);

    
    const tlf = document.createElement('div');
    tlf.classList.add('tlf');
    tlf.innerText = "Phone: " + storeObj[i].tlf;
    another.appendChild(tlf);

    /* append address to second div */
    const addr = document.createElement('div');
    addr.classList.add('address');
    addr.innerText = "Address: " + storeObj[i].address;
    another.appendChild(addr);

    /* second indiv container */
    const details = document.createElement('div');
    details.classList.add('store-details');
    storeItem.appendChild(details);
    
    /* select second item for appending inside div */ 
    const sec = storeItem.querySelector('.store-details');
    
    /* create a list for opening hours */ 
    const hrs = document.createElement('ul');
    sec.appendChild(hrs);
    
    let openingHours = storeObj[i].hours;
    
    console.log(openingHours);
    for(var j in openingHours) {
      console.log(j);
      const oh = document.createElement('li');
    
      var ohText = "";
      if (j === "week"){
        ohText = "Monday - Friday:";      
      } else if (j === "monweds") {
        ohText = "Monday - Wednesday:";
      } else if (j === "thurs") {
        ohText = "Thursday:";
      } else if (j === "monthurs") {
        ohText = "Monday - Thursday:";
      } else if (j === "fri") {
        ohText = "Friday:";
      } else if (j === "sat"){
        ohText = "Saturday:";
      } else if (j === "sun"){
        ohText = "Sunday:";
      }
      oh.innerHTML = "<span>"+ ohText + "</span>" + openingHours[j];
      //oh.innerText = ohText + openingHours[j];
      sec.appendChild(oh);
    }
    
    
    /* third div - grid area store-buttons */
    const buttons = document.createElement('div');
    buttons.classList.add('store-buttons');
    storeItem.appendChild(buttons);  
    const third = storeItem.querySelector('.store-buttons');
    
    /* store information button */
    const storeInfo = document.createElement('div');
    storeInfo.classList.add('store-info');
    storeInfo.innerText= 'View store information';
    third.appendChild(storeInfo);
    
    const storeDir = document.createElement('div');
    storeDir.classList.add('store-info');
    storeDir.classList.add('directions');
    storeDir.innerText= 'Get directions';
    third.appendChild(storeDir);
    
}


  
  
  