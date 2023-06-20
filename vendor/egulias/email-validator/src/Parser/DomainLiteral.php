<?php
namespace Egulias\EmailValidator\Parser;

use Egulias\EmailValidator\EmailLexer;
use Egulias\EmailValidator\Result\Result;
use Egulias\EmailValidator\Result\ValidEmail;
use Egulias\EmailValidator\Result\InvalidEmail;
use Egulias\EmailValidator\Warning\CFWSWithFWS;
use Egulias\EmailValidator\Warning\IPV6BadChar;
use Egulias\EmailValidator\Result\Reason\CRNoLF;
use Egulias\EmailValidator\Warning\IPV6ColonEnd;
use Egulias\EmailValidator\Warning\IPV6MaxGroups;
use Egulias\EmailValidator\Warning\ObsoleteDTEXT;
use Egulias\EmailValidator\Warning\AddressLiteral;
use Egulias\EmailValidator\Warning\IPV6ColonStart;
use Egulias\EmailValidator\Warning\IPV6Deprecated;
use Egulias\EmailValidator\Warning\IPV6GroupCount;
use Egulias\EmailValidator\Warning\IPV6DoubleColon;
use Egulias\EmailValidator\Result\Reason\ExpectingDTEXT;
use Egulias\EmailValidator\Result\Reason\UnusualElements;
use Egulias\EmailValidator\Warning\DomainLiteral as WarningDomainLiteral;

class DomainLiteral extends PartParser
{
<<<<<<< HEAD
    public const IPV4_REGEX = '/\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/';

    public const OBSOLETE_WARNINGS = [
        EmailLexer::INVALID,
        EmailLexer::C_DEL,
        EmailLexer::S_LF,
        EmailLexer::S_BACKSLASH
    ];

=======
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    public function parse() : Result
    {
        $this->addTagWarnings();

        $IPv6TAG = false;
        $addressLiteral = '';

        do {
<<<<<<< HEAD
            if (((array) $this->lexer->token)['type'] === EmailLexer::C_NUL) {
                return new InvalidEmail(new ExpectingDTEXT(), ((array) $this->lexer->token)['value']);
=======
            if ($this->lexer->token['type'] === EmailLexer::C_NUL) {
                return new InvalidEmail(new ExpectingDTEXT(), $this->lexer->token['value']);
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
            }

            $this->addObsoleteWarnings();

            if ($this->lexer->isNextTokenAny(array(EmailLexer::S_OPENBRACKET, EmailLexer::S_OPENBRACKET))) {
<<<<<<< HEAD
                return new InvalidEmail(new ExpectingDTEXT(), ((array) $this->lexer->token)['value']);
=======
                return new InvalidEmail(new ExpectingDTEXT(), $this->lexer->token['value']);
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
            }

            if ($this->lexer->isNextTokenAny(
                array(EmailLexer::S_HTAB, EmailLexer::S_SP, $this->lexer->token['type'] === EmailLexer::CRLF)
            )) {
                $this->warnings[CFWSWithFWS::CODE] = new CFWSWithFWS();
                $this->parseFWS();
            }

            if ($this->lexer->isNextToken(EmailLexer::S_CR)) {
<<<<<<< HEAD
                return new InvalidEmail(new CRNoLF(), ((array) $this->lexer->token)['value']);
            }

            if (((array) $this->lexer->token)['type'] === EmailLexer::S_BACKSLASH) {
                return new InvalidEmail(new UnusualElements(((array) $this->lexer->token)['value']), ((array) $this->lexer->token)['value']);
            }
            if (((array) $this->lexer->token)['type'] === EmailLexer::S_IPV6TAG) {
                $IPv6TAG = true;
            }

            if (((array) $this->lexer->token)['type'] === EmailLexer::S_CLOSEBRACKET) {
                break;
            }

            $addressLiteral .= ((array) $this->lexer->token)['value'];
=======
                return new InvalidEmail(new CRNoLF(), $this->lexer->token['value']);
            }

            if ($this->lexer->token['type'] === EmailLexer::S_BACKSLASH) {
                return new InvalidEmail(new UnusualElements($this->lexer->token['value']), $this->lexer->token['value']);
            }
            if ($this->lexer->token['type'] === EmailLexer::S_IPV6TAG) {
                $IPv6TAG = true;
            }

            if ($this->lexer->token['type'] === EmailLexer::S_CLOSEBRACKET) {
                break;
            }

            $addressLiteral .= $this->lexer->token['value'];
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca

        } while ($this->lexer->moveNext());


        //Encapsulate
        $addressLiteral = str_replace('[', '', $addressLiteral);
        $isAddressLiteralIPv4 = $this->checkIPV4Tag($addressLiteral);

        if (!$isAddressLiteralIPv4) {
            return new ValidEmail();
        } else {
            $addressLiteral = $this->convertIPv4ToIPv6($addressLiteral);
        }

        if (!$IPv6TAG) {
            $this->warnings[WarningDomainLiteral::CODE] = new WarningDomainLiteral();
            return new ValidEmail();
        }

        $this->warnings[AddressLiteral::CODE] = new AddressLiteral();

        $this->checkIPV6Tag($addressLiteral);

        return new ValidEmail();
    }

    /**
     * @param string $addressLiteral
     * @param int $maxGroups
     */
    public function checkIPV6Tag($addressLiteral, $maxGroups = 8) : void
    {
        $prev = $this->lexer->getPrevious();
        if ($prev['type'] === EmailLexer::S_COLON) {
            $this->warnings[IPV6ColonEnd::CODE] = new IPV6ColonEnd();
        }

        $IPv6       = substr($addressLiteral, 5);
        //Daniel Marschall's new IPv6 testing strategy
        $matchesIP  = explode(':', $IPv6);
        $groupCount = count($matchesIP);
        $colons     = strpos($IPv6, '::');

        if (count(preg_grep('/^[0-9A-Fa-f]{0,4}$/', $matchesIP, PREG_GREP_INVERT)) !== 0) {
            $this->warnings[IPV6BadChar::CODE] = new IPV6BadChar();
        }

        if ($colons === false) {
            // We need exactly the right number of groups
            if ($groupCount !== $maxGroups) {
                $this->warnings[IPV6GroupCount::CODE] = new IPV6GroupCount();
            }
            return;
        }

        if ($colons !== strrpos($IPv6, '::')) {
            $this->warnings[IPV6DoubleColon::CODE] = new IPV6DoubleColon();
            return;
        }

        if ($colons === 0 || $colons === (strlen($IPv6) - 2)) {
            // RFC 4291 allows :: at the start or end of an address
            //with 7 other groups in addition
            ++$maxGroups;
        }

        if ($groupCount > $maxGroups) {
            $this->warnings[IPV6MaxGroups::CODE] = new IPV6MaxGroups();
        } elseif ($groupCount === $maxGroups) {
            $this->warnings[IPV6Deprecated::CODE] = new IPV6Deprecated();
        }
    }
<<<<<<< HEAD

=======
    
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
    public function convertIPv4ToIPv6(string $addressLiteralIPv4) : string
    {
        $matchesIP  = array();
        $IPv4Match = preg_match(
            '/\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/',
            $addressLiteralIPv4,
            $matchesIP);

        // Extract IPv4 part from the end of the address-literal (if there is one)
        if ($IPv4Match > 0) {
            $index = (int) strrpos($addressLiteralIPv4, $matchesIP[0]);
            //There's a match but it is at the start
            if ($index > 0) {
                // Convert IPv4 part to IPv6 format for further testing
                return substr($addressLiteralIPv4, 0, $index) . '0:0';
            }
        }

        return $addressLiteralIPv4;
    }

    /**
     * @param string $addressLiteral
     *
     * @return bool
     */
    protected function checkIPV4Tag($addressLiteral) : bool
    {
        $matchesIP  = array();
        $IPv4Match = preg_match(
            '/\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/',
            $addressLiteral,
            $matchesIP);

        // Extract IPv4 part from the end of the address-literal (if there is one)

        if ($IPv4Match > 0) {
            $index = strrpos($addressLiteral, $matchesIP[0]);
            //There's a match but it is at the start
            if ($index === 0) {
                $this->warnings[AddressLiteral::CODE] = new AddressLiteral();
                return false;
            }
        }

        return true;
    }

    private function addObsoleteWarnings() : void
    {
<<<<<<< HEAD
        if(in_array(((array) $this->lexer->token)['type'], self::OBSOLETE_WARNINGS)) {
=======
        if ($this->lexer->token['type'] === EmailLexer::INVALID ||
            $this->lexer->token['type'] === EmailLexer::C_DEL   ||
            $this->lexer->token['type'] === EmailLexer::S_LF ||
            $this->lexer->token['type'] === EmailLexer::S_BACKSLASH
        ) {
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
            $this->warnings[ObsoleteDTEXT::CODE] = new ObsoleteDTEXT();
        }
    }

    private function addTagWarnings() : void
    {
        if ($this->lexer->isNextToken(EmailLexer::S_COLON)) {
            $this->warnings[IPV6ColonStart::CODE] = new IPV6ColonStart();
        }
        if ($this->lexer->isNextToken(EmailLexer::S_IPV6TAG)) {
            $lexer = clone $this->lexer;
            $lexer->moveNext();
            if ($lexer->isNextToken(EmailLexer::S_DOUBLECOLON)) {
                $this->warnings[IPV6ColonStart::CODE] = new IPV6ColonStart();
            }
        }
    }

<<<<<<< HEAD
}
=======
}
>>>>>>> 80f6c5946528a9ba13e2ef4d814c9c23223fbdca
