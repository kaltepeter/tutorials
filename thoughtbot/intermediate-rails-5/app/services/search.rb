class Search
  attr_reader :term

  def initialize(term:)
    @term = term
  end

  def run
    Sunspot.search([TextShout, PhotoShout]) {fulltext term}.results
    ShoutSearchQuery.new(term: term).to_relation
  end
  alias results run
end