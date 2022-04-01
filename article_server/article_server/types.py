from pydantic import BaseModel
from itertools import chain


class Article(BaseModel):
    title: str
    tags: list[dict[str, str]]
    url: str
    likes_count: int
    created_at: str

    def to_tuple(
        self,
    ) -> tuple[str, list[str], str, int, str, str, list[str], int, str]:
        return tuple(
            chain.from_iterable((self._to_tuple(), self._to_tuple_without_url()))
        )

    def _to_tuple(self) -> tuple[str, list[str], str, int, str]:
        tags = list(chain.from_iterable([item.values() for item in self.tags]))
        return (
            self.title,
            tags,
            self.url,
            self.likes_count,
            self.created_at,
        )

    def _to_tuple_without_url(self) -> tuple[str, list[str], int, str]:
        tags = list(chain.from_iterable([item.values() for item in self.tags]))
        return (
            self.title,
            tags,
            self.likes_count,
            self.created_at,
        )
