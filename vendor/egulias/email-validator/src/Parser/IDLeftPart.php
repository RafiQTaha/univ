<?php

namespace Egulias\EmailValidator\Parser;

use Egulias\EmailValidator\Result\Result;
use Egulias\EmailValidator\Parser\LocalPart;
use Egulias\EmailValidator\Result\InvalidEmail;
use Egulias\EmailValidator\Result\Reason\CommentsInIDRight;

class IDLeftPart extends LocalPart
{
    protected function parseComments(): Result
    {
<<<<<<< HEAD
       return new InvalidEmail(new CommentsInIDRight(), ((array) $this->lexer->token)['value']);
=======
       return new InvalidEmail(new CommentsInIDRight(), $this->lexer->token['value']);
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    }
}