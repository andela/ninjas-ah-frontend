export default ({ commentId, userId, whoLiked, currentLikes }) => {
  let [updatedLikes] = [currentLikes];
  let [updatedWhoLiked] = [whoLiked];
  const hasLiked = whoLiked.includes(userId);

  updatedLikes = hasLiked ? currentLikes - 1 : currentLikes + 1;

  updatedWhoLiked = hasLiked ? whoLiked.filter(id => id !== userId) : [...whoLiked, userId];

  return {
    commentId,
    number: updatedLikes,
    whoLiked: updatedWhoLiked
  };
};
