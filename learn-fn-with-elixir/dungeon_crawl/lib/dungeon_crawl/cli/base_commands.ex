defmodule DungeonCrawl.CLI.BaseCommands do
  use Monad.Operators
  alias Mix.Shell.IO, as: Shell
  import Monad.Result, only: [success: 1, success?: 1, error: 1, return: 1]

  @invalid_option "Invalid option"

  def display_options(options) do
    options
    |> Enum.with_index(1)
    |> Enum.each(fn {option, index} ->
      Shell.info("#{index} - #{option}")
    end)

    options
  end

  def generate_question(options) do
    options = Enum.join(1..Enum.count(options), ",")
    "Which one? [#{options}]\n"
  end

  # def parse_answer(answer) do
  #   {option, _} = Integer.parse(answer)
  #   option - 1
  # end

  def parse_answer(answer) do
    case Integer.parse(answer) do
      :error -> error(@invalid_option)
      {option, _} -> success(option - 1)
    end
  end

  def ask_for_index(options) do
    answer =
      options
      |> display_options()
      |> generate_question()
      |> Shell.prompt()
      |> Integer.parse()

    case answer do
      :error ->
        display_invalid_option()
        ask_for_index(options)

      {option, _} ->
        option - 1
    end
  end

  def display_invalid_option do
    Shell.cmd("clear")
    Shell.error("Invalid option")
    Shell.prompt("Please Enter to try again.")
    Shell.cmd("clear")
  end

  def ask_for_option(options) do
    answer =
      options
      |> display_options()
      |> generate_question()
      |> Shell.prompt()

    with {option, _} <- Integer.parse(answer),
         chosen when chosen != nil <- Enum.at(options, option - 1) do
      chosen
    else
      :error -> retry(options)
      nil -> retry(options)
    end
  end

  def retry(options) do
    display_error(@invalid_option)
    ask_for_option(options)
  end

  # def ask_for_option(options) do
  #   try do
  #     options
  #     |> display_options()
  #     |> generate_question()
  #     |> Shell.prompt()
  #     |> parse_answer!()
  #     |> find_option_by_index!(options)
  #   catch
  #     {:error, message} ->
  #       display_error(message)
  #       ask_for_option(options)
  #       # rescue
  #       #   e in DungeonCrawl.CLI.InvalidOption ->
  #       #     display_error(e)
  #       #     ask_for_option(options)
  #   end
  # end

  # def display_error(e) do
  #   Shell.cmd("clear")
  #   Shell.error(e.message)
  #   Shell.prompt("Press enter to continue.")
  #   Shell.cmd("clear")
  # end

  def display_error(message) do
    Shell.cmd("clear")
    Shell.error(message)
    Shell.prompt("Press enter to continue.")
    Shell.cmd("clear")
  end

  def find_option_by_index(index, options) do
    case Enum.at(options, index) do
      nil -> error(@invalid_option)
      chosen_option -> success(chosen_option)
    end
  end
end
