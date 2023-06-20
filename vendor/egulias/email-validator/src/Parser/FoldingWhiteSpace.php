<?php
namespace Egulias\EmailValidator\Parser;

use Egulias\EmailValidator\EmailLexer;
use Egulias\EmailValidator\Warning\CFWSNearAt;
use Egulias\EmailValidator\Result\InvalidEmail;
use Egulias\EmailValidator\Warning\CFWSWithFWS;
use Egulias\EmailValidator\Result\Reason\CRNoLF;
use Egulias\EmailValidator\Result\Reason\AtextAfterCFWS;
use Egulias\EmailValidator\Result\Reason\CRLFAtTheEnd;
use Egulias\EmailValidator\Result\Reason\CRLFX2;
use Egulias\EmailValidator\Result\Reason\ExpectingCTEXT;
use Egulias\EmailValidator\Result\Result;
use Egulias\EmailValidator\Result\ValidEmail;

class  FoldingWhiteSpace extends PartParser
{
<<<<<<< HEAD
    public const FWS_TYPES = [
        EmailLexer::S_SP,
        EmailLexer::S_HTAB,
        EmailLexer::S_CR,
        EmailLexer::S_LF,
        EmailLexer::CRLF
    ];

=======
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    public function parse() : Result
    {
        if (!$this->isFWS()) {
            return new ValidEmail();
        }

        $previous = $this->lexer->getPrevious();

        $resultCRLF = $this->checkCRLFInFWS();
        if ($resultCRLF->isInvalid()) {
            return $resultCRLF;
        }

<<<<<<< HEAD
        if (((array) $this->lexer->token)['type'] === EmailLexer::S_CR) {
            return new InvalidEmail(new CRNoLF(), ((array) $this->lexer->token)['value']);
        }

        if ($this->lexer->isNextToken(EmailLexer::GENERIC) && $previous['type']  !== EmailLexer::S_AT) {
            return new InvalidEmail(new AtextAfterCFWS(), ((array) $this->lexer->token)['value']);
        }

        if (((array) $this->lexer->token)['type'] === EmailLexer::S_LF || ((array) $this->lexer->token)['type'] === EmailLexer::C_NUL) {
            return new InvalidEmail(new ExpectingCTEXT(), ((array) $this->lexer->token)['value']);
=======
        if ($this->lexer->token['type'] === EmailLexer::S_CR) {
            return new InvalidEmail(new CRNoLF(), $this->lexer->token['value']);
        }

        if ($this->lexer->isNextToken(EmailLexer::GENERIC) && $previous['type']  !== EmailLexer::S_AT) {
            return new InvalidEmail(new AtextAfterCFWS(), $this->lexer->token['value']);
        }

        if ($this->lexer->token['type'] === EmailLexer::S_LF || $this->lexer->token['type'] === EmailLexer::C_NUL) {
            return new InvalidEmail(new ExpectingCTEXT(), $this->lexer->token['value']);
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
        }

        if ($this->lexer->isNextToken(EmailLexer::S_AT) || $previous['type']  === EmailLexer::S_AT) {
            $this->warnings[CFWSNearAt::CODE] = new CFWSNearAt();
        } else {
            $this->warnings[CFWSWithFWS::CODE] = new CFWSWithFWS();
        }

        return new ValidEmail();
    }

    protected function checkCRLFInFWS() : Result
    {
<<<<<<< HEAD
        if (((array) $this->lexer->token)['type'] !== EmailLexer::CRLF) {
=======
        if ($this->lexer->token['type'] !== EmailLexer::CRLF) {
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
            return new ValidEmail();
        }

        if (!$this->lexer->isNextTokenAny(array(EmailLexer::S_SP, EmailLexer::S_HTAB))) {
<<<<<<< HEAD
            return new InvalidEmail(new CRLFX2(), ((array) $this->lexer->token)['value']);
=======
            return new InvalidEmail(new CRLFX2(), $this->lexer->token['value']);
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
        }

        //this has no coverage. Condition is repeated from above one
        if (!$this->lexer->isNextTokenAny(array(EmailLexer::S_SP, EmailLexer::S_HTAB))) {
<<<<<<< HEAD
            return new InvalidEmail(new CRLFAtTheEnd(), ((array) $this->lexer->token)['value']);
=======
            return new InvalidEmail(new CRLFAtTheEnd(), $this->lexer->token['value']);
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
        }

        return new ValidEmail();
    }
<<<<<<< HEAD

=======
     
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    protected function isFWS() : bool
    {
        if ($this->escaped()) {
            return false;
        }

<<<<<<< HEAD
        return in_array(((array) $this->lexer->token)['type'], self::FWS_TYPES);
=======
        return $this->lexer->token['type'] === EmailLexer::S_SP ||
            $this->lexer->token['type'] === EmailLexer::S_HTAB ||
            $this->lexer->token['type'] === EmailLexer::S_CR ||
            $this->lexer->token['type'] === EmailLexer::S_LF ||
            $this->lexer->token['type'] === EmailLexer::CRLF;
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    }
}