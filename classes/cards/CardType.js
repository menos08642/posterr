/**
 * @desc A card type enum
 * @returns nothing
 */
class CardType {

  static CardTypeEnum = { 
    NowScreening: ["Now Screening", ""], 
    OnDemand: ["On-demand", ""], 
    ComingSoon: ["Coming Soon", ""], 
    Playing: ["Playing", ""], 
    IFrame: ["", ""], 
    Picture: ["Picture", ""], 
    EBook: ["E-Book Release", ""],
    Triva: ["Trivia Question", ""]
  };
}

module.exports = CardType;
