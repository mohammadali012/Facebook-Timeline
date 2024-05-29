/**
 * createvalidation alert
 * @param {*} msg
 * @param {*} type
 */

const createAlert = (msg, type = "danger") => {
  return `<p class = "alert alert-${type} d-flex justify-content-between"> ${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
};



/**
 * check a Email is Eamil
 * @param {*} email 
 * @returns 
 */
const isEmail = (email) => {
    const pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{2,}\.[a-z]{2,4}$/;
    return pattern.test(email);
};


/**
 * check a Email is Eamil
 * @param {*} mobile 
 * @returns 
 */
const isMobile = (mobile) => {
  const pattern = /^(\+880|8801|01)[0-9]{9}$/;
  return pattern.test(mobile);
};



const createID = () => {
  const timestamp = (new Date().getTime() / 1000 | 0).toString(16); // Get current timestamp in seconds
  const uniquePart = Math.random().toString(16).substring(2); // Generate a random unique part
  const machineId = Math.floor(Math.random() * 16777215).toString(16); // Generate a random machine identifier (3 bytes)
  const processId = (Math.floor(Math.random() * 65535) << 16).toString(16); // Generate a random process identifier (2 bytes)
  const increment = Math.floor(Math.random() * 16777215).toString(16); // Generate a random incrementing value (3 bytes)
  
  // Combine all the parts to create a unique ID
  const uniqueID = timestamp + machineId + processId + increment + uniquePart;
  return uniqueID;
};


/**
 * Time function
 * @param {*} timestamp 
 * @returns 
 */

const timeAgo = (timestamp) => {
  const seconds = Math.floor((new Date() - timestamp) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
      return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
      return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
      return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
      return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
      return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

// Example usage
const timestamp = new Date("2024-03-22T12:00:00Z");
console.log(timeAgo(timestamp));


/**
 * Time just now functon
 * @param {*} timestamp 
 * @returns 
 */
const timeJustNow = (timestamp) => {
  const seconds = Math.floor((new Date() - timestamp) / 1000);

  if (seconds < 60) {
      return "just now";
  } else {
      return timeAgo(timestamp); // Using the timeAgo function from the previous example
  }
}

// Example usage
const timestamp1 = new Date("2024-03-22T12:00:00Z");
const timestamp2 = new Date("2024-03-23T14:30:00Z");

console.log(timeJustNow(timestamp1)); // Example within the last minute
console.log(timeJustNow(timestamp2)); // Example more than a minute ago