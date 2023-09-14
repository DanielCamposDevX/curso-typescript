import { Game } from "../protocols/game-protocol";
import { db } from "database/db.connection";



async function getGames() {
  const data = await db.query("SELECT * FROM games");
  return data.rows;

}

async function createGame(game: Game) {
  await db.query("INSERT INTO games (title,platform) VALUES($1,$2)",[game.title,game.platform]);
}

async function getGameByTitleAndPlatform(game: Game) {
  const specificGame = await db.query("SELECT * FROM games WHERE title = $1 AND platform = $2",[game.title,game.platform]);
  return specificGame;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;