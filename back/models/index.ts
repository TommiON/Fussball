import Club from './club';
import Player from './player';

Club.hasMany(Player, { foreignKey: 'clubId' });
Player.belongsTo(Club, { foreignKey: 'clubId' });

module.exports = {
    Club,
    Player
  }