import { COMMENTS_TO_LOAD } from './constants.js';
import { socialCommentsShown } from './modal-window.js';

const socialCommentsContainer = document.querySelector('.social__comments');
const socialCommentsItem = document.querySelector('.social__comment');
// const commentsCount = document.querySelector('.social__comment-count');
// const commentsLoader = document.querySelector('.comments-loader');

const commentsArray = [];
let showCommentsCount = 0;

const renderCommentElement = (showComment) => {
  const commentElement = socialCommentsItem.cloneNode(true);
  const commentElementImage = commentElement.querySelector('.social__picture');
  commentElementImage.src = showComment.avatar;
  commentElementImage.alt = showComment.name;
  socialCommentsShown.textContent = showCommentsCount;
  commentElement.querySelector('.social__text').textContent = showComment.message;
  return commentElement;
};

const renderComments = () => {
  const commentsFragment = document.createDocumentFragment();
  commentsArray.splice(0, COMMENTS_TO_LOAD).forEach((item) => {
    showCommentsCount++;
    commentsFragment.appendChild(renderCommentElement(item));
  });
  socialCommentsContainer.innerHTML = '';
  socialCommentsContainer.appendChild(commentsFragment);
};

const setSocialComments = (data) => {
  showCommentsCount = 0;
  commentsArray.length = 0;
  commentsArray.push(...data.slice());
};

export { renderComments, setSocialComments };
