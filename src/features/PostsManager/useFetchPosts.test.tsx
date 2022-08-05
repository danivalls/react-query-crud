import { renderHook, waitFor } from "test/testUtils";

import useFetchPosts from "./useFetchPosts";

jest.mock("repositories/posts", () => ({
  getAllPosts: () => MOCKED_POSTS,
}));

describe("useFetchPosts", () => {
  it("should return all posts when no filters are provided", async () => {
    const { result } = renderHook(() =>
      useFetchPosts({ title: "", userId: "" })
    );

    await waitFor(() => {
      const { posts } = result.current;

      expect(posts).toEqual(MOCKED_POSTS);
    });
  });

  it("should return filtered posts when userId filter is provided", async () => {
    const { result } = renderHook(() =>
      useFetchPosts({ title: "", userId: "1" })
    );

    await waitFor(() => {
      const { posts } = result.current;

      expect(posts).toEqual([MOCKED_POSTS[0], MOCKED_POSTS[2]]);
    });
  });

  it("should return filtered posts when title filter is provided", async () => {
    const { result } = renderHook(() =>
      useFetchPosts({ title: "qui est esse", userId: "" })
    );

    await waitFor(() => {
      const { posts } = result.current;

      expect(posts).toEqual([MOCKED_POSTS[1]]);
    });
  });
});

const MOCKED_POSTS = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 2,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 3,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
];
