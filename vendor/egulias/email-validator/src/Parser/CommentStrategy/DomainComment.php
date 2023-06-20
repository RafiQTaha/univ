<?php

namespace Egulias\EmailValidator\Parser\CommentStrategy;

use Egulias\EmailValidator\EmailLexer;
use Egulias\EmailValidator\Result\Result;
use Egulias\EmailValidator\Result\ValidEmail;
use Egulias\EmailValidator\Result\InvalidEmail;
use Egulias\EmailValidator\Result\Reason\ExpectingATEXT;

class DomainComment implements CommentStrategy
{
    public function exitCondition(EmailLexer $lexer, int $openedParenthesis) : bool
    {
        if (($openedParenthesis === 0 && $lexer->isNextToken(EmailLexer::S_DOT))){ // || !$internalLexer->moveNext()) {
            return false;
        }

        return true;
    }

    public function endOfLoopValidations(EmailLexer $lexer) : Result
    {
        //test for end of string
        if (!$lexer->isNextToken(EmailLexer::S_DOT)) {
<<<<<<< HEAD
            return new InvalidEmail(new ExpectingATEXT('DOT not found near CLOSEPARENTHESIS'), ((array) $lexer->token)['value']);
=======
            return new InvalidEmail(new ExpectingATEXT('DOT not found near CLOSEPARENTHESIS'), $lexer->token['value']);
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
        }
        //add warning
        //Address is valid within the message but cannot be used unmodified for the envelope
        return new ValidEmail();
    }

    public function getWarnings(): array
    {
        return [];
    }
}