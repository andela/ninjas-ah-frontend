import { updateArticleLikesOrDislikes } from '../../helpers';

test(' updateArticleLikesOrDislikes helper', () => {
  const data = {
    userId: 1,
    whoLiked: [1, 2, 10],
    currentLikes: 3,
    whoDisliked: [4, 5, 6],
    currentDislikes: 1,
    action: 'dislike'
  };
  const result = updateArticleLikesOrDislikes(data);

  const hasLiked = data.whoLiked.includes(data.userId);
  const hasDisliked = data.whoDisliked.includes(data.userId);
});

test(' updateArticleLikesOrDislikes helper', () => {
  const data = {
    userId: 5,
    whoLiked: [1, 2, 10],
    currentLikes: 3,
    whoDisliked: [4, 5, 6],
    currentDislikes: 1,
    action: 'dislike'
  };
  const result = updateArticleLikesOrDislikes(data);

  const hasLiked = data.whoLiked.includes(data.userId);
  const hasDisliked = data.whoDisliked.includes(data.userId);
});
