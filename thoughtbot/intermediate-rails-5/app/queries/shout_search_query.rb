class ShoutSearchQuery
  def initialize(term:)
    @term = term
  end

  def to_relation
    Shout.where(id: Shout.search { fulltext term }.hits.map(&:primary_key))
  end

  private

  attr_reader :term
end