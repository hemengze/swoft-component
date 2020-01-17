<?php declare(strict_types=1);
/**
 * This file is part of Swoft.
 *
 * @link     https://swoft.org
 * @document https://swoft.org/docs
 * @contact  group@swoft.org
 * @license  https://github.com/swoft-cloud/swoft/blob/master/LICENSE
 */

namespace SwoftTest\Component\Testing\WebSocket\Middleware;

use Swoft\Bean\Annotation\Mapping\Bean;
use Swoft\Log\Helper\CLog;
use Swoft\WebSocket\Server\Contract\MessageHandlerInterface;
use Swoft\WebSocket\Server\Contract\MiddlewareInterface;
use Swoft\WebSocket\Server\Contract\RequestInterface;
use Swoft\WebSocket\Server\Contract\ResponseInterface;

/**
 * Class DemoMiddleware
 *
 * @Bean()
 */
class WsDemoMiddleware implements MiddlewareInterface
{
    /**
     * @param RequestInterface        $request
     * @param MessageHandlerInterface $handler
     *
     * @return ResponseInterface
     */
    public function process(RequestInterface $request, MessageHandlerInterface $handler): ResponseInterface
    {
        $start = '>before ';

        CLog::info('before handle');

        $resp = $handler->handle($request);

        $resp->setData($start . $resp->getData() . ' after>');

        CLog::info('after handle');

        return $resp;
    }
}