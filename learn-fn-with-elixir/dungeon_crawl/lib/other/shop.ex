defmodule Other.Shop do
  def checkout() do
    with {quantity, _} <- ask_number("Quantity?"), {price, _} <- ask_number("Price?") do
      calculate(quantity, price)
    else
      :error -> IO.puts("It's not a number")
    end
  end

  def calculate(:error, _), do: IO.puts("Quantity is not a number")
  def calculate(_, :error), do: IO.puts("Price is not a number")
  def calculate({quantity, _}, {price, _}), do: quantity * price

  def ask_number(message) do
    (message <> "\n")
    |> IO.gets()
    |> Integer.parse()
  end
end
