import { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // useEffect 내부에서 데이터를 가져오는 비동기 함수 정의 (어디서 가져오는데?)
    const fetchMovies = async () => {
      try {
        // JSONPlaceholder API 로부터 영화 목록 데이터 가져오기.
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );

        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        } else {
          throw new Error('Failed to fetch movies');
        }
      } catch (error) {
        console.error('영화 목록 가져오기 실패: ', error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-600">Movie List</h1>
      <ul>
        {/* 영화 목록을 매핑하여 목록 항목 렌더링 */}
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
