export default ({ userId, whoLiked, currentLikes, whoDisliked, currentDislikes, action }) => {
  let [updatedLikes, updatedDislikes] = [currentLikes, currentDislikes];
  let [updatedWhoLiked, updatedWhoDisliked] = [whoLiked, whoDisliked];
  const hasLiked = whoLiked.includes(userId);
  const hasDisliked = whoDisliked.includes(userId);

  updatedLikes = hasLiked
    ? currentLikes - 1
    : (action === 'like' && currentLikes + 1) || currentLikes;

  updatedWhoLiked = hasLiked
    ? whoLiked.filter(id => id !== userId)
    : (action === 'like' && [...whoLiked, userId]) || whoLiked;

  updatedDislikes = hasDisliked
    ? currentDislikes - 1
    : (action === 'dislike' && currentDislikes + 1) || currentDislikes;

  updatedWhoDisliked = hasDisliked
    ? whoDisliked.filter(id => id !== userId)
    : (action === 'dislike' && [...whoDisliked, userId]) || whoDisliked;

  const likes = {
    number: updatedLikes,
    whoLiked: updatedWhoLiked
  };

  const dislikes = {
    number: updatedDislikes,
    whoDisliked: updatedWhoDisliked
  };
  return { likes, dislikes };
};
