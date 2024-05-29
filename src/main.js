const post_form = document.getElementById("post-create-form");
const post_area = document.getElementById("post-area");
const post_create_btn = document.getElementById("post_create_btn");
const msg = document.querySelector(".msg");

// get all posts and show timeline

const getAllPosts = () => {
  const posts = JSON.parse(localStorage.getItem("posts"));

  // post loop

  if (posts) {
    let posts_data = "";
    posts.reverse().forEach((item, index) => {
      posts_data += `
      <div class="row justify-content-center my-3">
      <div class="col-md-5">
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="author-info">
              <div class="w-100 d-flex gap-2">
                <img
                  src="${item.photo}"
                  alt=""
                />
                <div class="author-details">
                  <h3>${item.name}</h3>
                  <span>${timeJustNow(item.createdAt)}</span>
                </div>
              </div>
              <div class="w-100 d-flex justify-content-end gap-1">
                <button data-bs-toggle="modal" data-bs-target="#post-update" oncllick="modalEdit('${
                  item.id
                }')"><i class="fa fa-edit"></i></button>
                <button onclick="deletepost('${
                  item.id
                }')"><i class="fa fa-times"></i></button>
              </div>
            </div>

            <div class="post-content mt-3">
              <p>
                ${item.post}
              </p>
              <img
              class="w-100"
                src="${item.post_photo}"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
    });

    post_area.innerHTML = posts_data;
  }
};


// edit modal

const modalEdit = (id) => {
  console.log(id);
};

// delete post

const deletepost = (id) => {
  const conf = confirm("Are you sure?");
  if (conf) {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const updatedPost = posts.filter((data) => data.id !== id);
    localStorage.setItem("posts", JSON.stringify(updatedPost));
    getAllPosts();
  }
};
getAllPosts();

// post form subnit

post_form.onsubmit = (e) => {
  e.preventDefault();

  // get form data

  const form_data = new FormData(e.target);
  const { name, photo, post, post_photo } = Object.fromEntries(form_data);

  // validation

  if (!name.trim() || !photo.trim()) {
    msg.innerHTML = createAlert("All fields are required");
  } else {
    const old_data = localStorage.getItem("posts");

    let ls_data = [];
    if (old_data) {
      ls_data = JSON.parse(old_data);
    }

    ls_data.push({
      id: createID(),
      name,
      photo,
      post,
      post_photo,
      createdAt: Date.now(),
    });

    localStorage.setItem("posts", JSON.stringify(ls_data));

    e.target.reset();
    post_create_btn.click();
    getAllPosts();
  }
};
