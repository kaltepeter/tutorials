import pytest
import cards


@pytest.mark.xfail
def test_no_path_fail():
    cards.CardsDB()
