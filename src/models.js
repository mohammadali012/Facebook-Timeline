/**
 * Get data form LS
 * @param {*} key 
 */
const getDataLs = (key) => {
    const data = localStorage.getItem(key);

    if ( data ) {
        return JSON.parse(data);
    }else {
        return false;
    }
};


/**
 * Save data to LS
 * @param {*} key 
 * @param {*} data 
 */
const sendDataLS = (key, stdData) => {
    const data = localStorage.getItem(key);

    let lsData;
    if ( data ) {
        lsData = JSON.parse(data);
    } else {
        lsData = [];
    }

    lsData.push(stdData);

    localStorage.setItem(key, JSON.stringify(lsData));
};



// Single student data function
const getSingledata = (key, id) => {
    const data = JSON.parse(localStorage.getItem(key));

    if ( data ) {
        return data.find((item) => item.id == id);
    } else {
        return false;
    }
};


// Delete student info

const deleteSingleData = (key, id) => {
    const data = JSON.parse(localStorage.getItem(key));

   
    const deleteData = data.filter((item) => item.id != id);
    localStorage.setItem(key, JSON.stringify(deleteData));
};