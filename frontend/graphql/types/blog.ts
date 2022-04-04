import {objectType, extendType} from 'nexus';

export const Blog = objectType({
  name: 'Blog',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('title');
    t.nonNull.string('url');
    t.list.nonNull.string('tags');
    t.nonNull.string('createdAt');
  },
});

export const BlogsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.nonNull.field('Blogs', {
      type: 'Blog',
      resolve: async (_, _args, ctx) => {
        const blogs = await ctx.prisma.blog.findMany();
        return blogs;
      },
    });
  },
});
