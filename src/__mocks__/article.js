export default (Object.article = {
  title: 'my title well done',
  description: 'description of the article: well',
  body: 'body of the article: well'
});

export const newHighlight = {
  slug: 'slug',
  userId: 1,
  anchorKey: 'cnu26',
  highlightedText: 'test',
  startIndex: 0,
  stopIndex: 4,
  comment: 'comment'
};

export const newArticleReport = {
  title: 'title',
  type: 'type',
  body: 'body'
};

export const article = {
  title: 'hello',
  slug: 'slug-slug-slug',
  description: 'description of the article',
  body: JSON.stringify({
    blocks: [
      {
        key: 'cnu26',
        text: 'test componentWillReceiveProps failedtest componentWillReceiveProps failed',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          { offset: 0, length: 74, style: 'color-rgb(36,41,46)' },
          { offset: 0, length: 74, style: 'bgcolor-rgb(255,255,255)' },
          { offset: 0, length: 74, style: 'fontsize-32' },
          {
            offset: 0,
            length: 74,
            style:
              'fontfamily--apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'
          }
        ],
        entityRanges: [],
        data: { 'text-align': 'start' }
      },
      {
        key: 'emuik',
        text: 'Okey',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          { offset: 0, length: 4, style: 'color-rgb(36,41,46)' },
          { offset: 0, length: 4, style: 'bgcolor-rgb(255,255,255)' },
          { offset: 0, length: 4, style: 'fontsize-32' },
          {
            offset: 0,
            length: 4,
            style:
              'fontfamily--apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'
          }
        ],
        entityRanges: [],
        data: {}
      }
    ],
    entityMap: {}
  })
};

export const newComment = {
  id: 2,
  articleSlug: 'slug',
  userId: 5,
  body: 'this is a comment'
};

export const Comment = { body: 'comme here' };
