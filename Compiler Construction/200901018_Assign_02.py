import re
import ast


def LexicalAnalyser(exp):
    token_list = []

    # complex regex like assignment or statements are not included THEY ARE HARD
    # r'([a-z]+=[\w]+)*([\w]+[-+*\/]*[(]*([\w]+[-+\/*]+[\w]+)*([\w])*[)]*)*' <- good luck figuring this out

    # show sets of all included characters (excluding whitespaces and carriage return)
    print(f"characters: {re.findall(r'[a-zA-Z]', exp)}")
    print(f"constants: {re.findall(r'[0-9]', exp)}")
    print(f"operators: {re.findall(r'[=|&^%+*/-]', exp)}")
    print(f"parenthesis: {re.findall(r'[(){}]', exp)}")    # can't put [] in there >:(
    print(f"special characters: {re.findall(r'[,.:;#@$!]', exp)}")

    # Remove Whitespaces and Insert into Token List
    token_list += re.sub(' ', '', exp)
    return token_list


def SyntaxAnalyzer(exp):
    code = ast.parse(exp, mode='exec')  # parse the expression
    tree = ast.dump(code, indent=5)     # show translation of expression, indent for readability
    return tree


# Input Expression
expression = input('Enter an expression: ')

# Module 1
token_string = LexicalAnalyser(expression)
print(f'Token String: {token_string}')

# Module 2
syntax_tree = SyntaxAnalyzer(f'{expression}')
print(syntax_tree)
