import { updateCommentLikes } from '../../helpers';

test(' updateCommentLikes helper', () => {
  const data = {
    userId: 1,
    whoLiked: [1, 2, 10],
    currentLikes: 3
  };
  updateCommentLikes(data);
  data.whoLiked.includes(data.userId);
});

test(' updateCommentLikes helper', () => {
  const data = {
    userId: 5,
    whoLiked: [1, 2, 10],
    currentLikes: 3
  };
  updateCommentLikes(data);
  data.whoLiked.includes(data.userId);
});
