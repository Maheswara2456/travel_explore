// Load existing feedbacks or empty array
let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

function displayFeedbacks() {
  const feedbackList = document.getElementById("feedbackList");
  feedbackList.innerHTML = "";

  feedbacks.forEach((feedback, index) => {
    const item = document.createElement("div");
    item.classList.add("feedback-item");

    item.innerHTML = `
      <h4>${feedback.username}</h4>
      <p>${feedback.text}</p>
      <div class="feedback-actions">
        <button onclick="likeFeedback(${index})">👍 ${feedback.likes || 0}</button>
        <button onclick="toggleCommentBox(${index})">💬 Comment</button>
      </div>
      <div class="comment-box" id="comment-box-${index}" style="display:none;">
        <input type="text" id="comment-input-${index}" placeholder="Add a comment"/>
        <button onclick="addComment(${index})">Submit</button>
      </div>
      <div class="comments-list" id="comments-list-${index}">
        ${feedback.comments ? feedback.comments.map(c => `<p>💬 ${c}</p>`).join('') : ''}
      </div>
    `;

    feedbackList.prepend(item);
  });
}

// Like a feedback
function likeFeedback(index) {
  feedbacks[index].likes = (feedbacks[index].likes || 0) + 1;
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  displayFeedbacks();
}

// Toggle comment input box
function toggleCommentBox(index) {
  const box = document.getElementById(`comment-box-${index}`);
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

// Add comment
function addComment(index) {
  const input = document.getElementById(`comment-input-${index}`);
  const commentText = input.value.trim();
  if (!commentText) return;

  if (!feedbacks[index].comments) feedbacks[index].comments = [];
  feedbacks[index].comments.push(commentText);

  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  input.value = '';
  displayFeedbacks();
}

// Add new feedback
document.getElementById("submitBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const feedbackText = document.getElementById("feedbackText").value.trim();

  if (username && feedbackText) {
    feedbacks.push({ username, text: feedbackText, likes: 0, comments: [] });
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
    displayFeedbacks();
    document.getElementById("username").value = "";
    document.getElementById("feedbackText").value = "";
  } else {
    alert("Please enter your name and feedback!");
  }
});

displayFeedbacks();
